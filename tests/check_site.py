"""Offline checks for the published static HTML. Python standard library only."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import hashlib
import json
import unittest
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = 'https://nextpulsegames.com'

class Document(HTMLParser):
    def __init__(self, filename):
        super().__init__()
        self.tags, self.text = [], ''
        self.feed((ROOT / filename).read_text(encoding='utf-8'))
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
    def handle_data(self, text):
        self.text += text
    def attrs(self, tag, **query):
        return [a for t,a in self.tags if t == tag and all(a.get(k) == v for k,v in query.items())]

class SiteTests(unittest.TestCase):
    def test_languages_and_canonicals(self):
        for file, lang, url in [('index.html','en',DOMAIN+'/'),('pl/index.html','pl',DOMAIN+'/pl/'),('privacy.html','en',DOMAIN+'/privacy.html'),('pl/privacy.html','pl',DOMAIN+'/pl/privacy.html')]:
            doc = Document(file)
            self.assertEqual(doc.attrs('html')[0]['lang'],lang)
            self.assertEqual(doc.attrs('link',rel='canonical')[0]['href'],url)
            alternates = {a['hreflang']:a['href'] for a in doc.attrs('link',rel='alternate')}
            self.assertEqual(set(alternates),{'en','pl','x-default'})
            self.assertEqual(alternates[lang],url)
            self.assertEqual(alternates['x-default'],alternates['en'])
            self.assertFalse(doc.attrs('meta',**{'http-equiv':'refresh'}))
    def test_complete_initial_html(self):
        for file, title, heading in [('index.html','NextPulse Games — Wolf And Eggs 3D, Free & Ad-Free','Wolf And Eggs 3D — a free family arcade game'),('pl/index.html','NextPulse Games — Wolf And Eggs 3D, gra bez reklam','Wolf And Eggs 3D — darmowa gra zręcznościowa bez reklam')]:
            doc = Document(file)
            self.assertIn(title,doc.text)
            self.assertIn(heading,doc.text)
            self.assertEqual(len(doc.attrs('h1')),1)
            self.assertEqual(len([a for a in doc.attrs('a') if 'data-shot' in a]),8)
            self.assertEqual(len(doc.attrs('a',**{'class':'indie-badge'})),1)
            self.assertEqual(len(doc.attrs('dialog',id='screenshotLightbox')),1)
            self.assertFalse('08_hero' in (ROOT/file).read_text(encoding='utf-8'))
    def test_local_links_and_assets(self):
        for file in ['index.html','pl/index.html','privacy.html','pl/privacy.html','404.html']:
            doc = Document(file)
            for tag, attrs in doc.tags:
                for key in ['href','src']:
                    value = attrs.get(key,'')
                    if not value or value.startswith(('#','mailto:')): continue
                    parsed = urlsplit(value)
                    if parsed.netloc and parsed.netloc != 'nextpulsegames.com': continue
                    self.assertTrue(parsed.path.startswith('/'), (file,value))
                    target = ROOT / parsed.path.lstrip('/')
                    if parsed.path.endswith('/'): target /= 'index.html'
                    self.assertTrue(target.is_file(), (file,value))
    def test_social_metadata_and_structured_data(self):
        for file in ['index.html','pl/index.html']:
            source = (ROOT/file).read_text(encoding='utf-8')
            payload = source.split('<script type="application/ld+json">')[1].split('</script>')[0]
            graph = json.loads(payload)['@graph']
            self.assertEqual({n['@type'] for n in graph},{'Organization','WebSite','VideoGame','WebPage'})
            for node in graph:
                for field in ['image','logo']:
                    if field in node: self.assertTrue((ROOT / urlsplit(node[field]).path.lstrip('/')).is_file())
                self.assertNotIn('aggregateRating',node)
                self.assertNotIn('award',node)
            doc = Document(file)
            for field in ['og:image','og:title','og:description','og:url','og:locale','og:locale:alternate']:
                self.assertEqual(len(doc.attrs('meta',property=field)),1)
    def test_no_language_side_effects(self):
        script = (ROOT/'app.js').read_text(encoding='utf-8')
        for forbidden in ['localStorage','navigator.language','document.title','location.replace','location.href =']:
            self.assertNotIn(forbidden,script)
    def test_404_and_sitemap(self):
        doc = Document('404.html')
        self.assertIn('noindex',doc.attrs('meta',name='robots')[0]['content'])
        self.assertFalse(doc.attrs('link',rel='canonical'))
        urls = {n.text for n in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
        self.assertEqual(urls,{DOMAIN+'/',DOMAIN+'/pl/',DOMAIN+'/privacy.html',DOMAIN+'/pl/privacy.html'})
        self.assertIn('Sitemap: '+DOMAIN+'/sitemap.xml',(ROOT/'robots.txt').read_text())
        self.assertEqual((ROOT/'CNAME').read_text().strip(),'nextpulsegames.com')
    def test_capture_provenance(self):
        manifest = json.loads((ROOT/'assets/screens/4.0-40-20261022/provenance.json').read_text(encoding='utf-8'))
        self.assertEqual(len(manifest['images']),16)
        for lang in ['en','pl']:
            images = [entry for entry in manifest['images'] if entry['language'] == lang]
            self.assertEqual(len(images),8)
            for entry in images:
                self.assertEqual(entry['size'],[1920,1080])
                self.assertEqual(hashlib.sha256((ROOT/entry['site_file']).read_bytes()).hexdigest(),entry['site_sha256'])
        banner = manifest['banner']
        self.assertEqual(hashlib.sha256((ROOT/banner['file']).read_bytes()).hexdigest(),banner['sha256'])

if __name__ == '__main__': unittest.main(verbosity=2)
