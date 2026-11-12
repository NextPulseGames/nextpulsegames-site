NEXT PULSE GAMES — FREE WEBSITE
================================

Folder:
C:\Users\grzel\Desktop\NextPulseGames_Website_FREE

Hosting recommendation:
GitHub Pages — 0 PLN / month

Custom domain:
Use the domain bought at Spaceship (for example nextpulsegames.com).
You only pay for the domain. The website hosting can remain free.

FILES
-----
index.html       complete English website
pl/index.html    complete Polish website
styles.css       visual design and responsive layout
app.js           accessible screenshot dialog and on-demand video player
privacy.html     English website privacy page
pl/privacy.html  Polish website privacy page
assets/          your real promotional materials and gameplay

SOCIAL LINKS
------------
The website currently uses the standard NextPulseGames handles:
X:         https://x.com/NextPulseGames
YouTube:   https://www.youtube.com/@NextPulseGames
Instagram: https://www.instagram.com/nextpulsegames/
TikTok:    https://www.tiktok.com/@nextpulsegames

IMPORTANT:
Before publishing, confirm the exact @handle for each social account. If any differs, edit the 4 links in index.html.
This is intentionally kept simple so no paid CMS, plugin or subscription is required.

GOOGLE PLAY
-----------
https://play.google.com/store/apps/details?id=com.nextpulsegames.wolfandeggs3d

DEPLOY TO GITHUB PAGES
----------------------
1. Create a public GitHub repository, e.g. nextpulsegames-site
2. Upload the CONTENTS of this folder to the repository root
3. GitHub -> repository Settings -> Pages
4. Source: Deploy from a branch
5. Branch: main / root
6. Save
7. GitHub will provide a free github.io URL
8. In Pages -> Custom domain, enter your Spaceship domain
9. In Spaceship DNS, add the DNS records GitHub shows for the custom domain
10. Enable Enforce HTTPS after DNS becomes active

No database, server, WordPress, hosting plan or paid plugin is needed.

UPDATE WORKFLOW (22 OCTOBER 2026)
--------------------------------
Edit both static language pages. The URL, not browser or stored preferences,
selects the language. Language controls must remain normal links.

Before publishing:
  python tests/check_site.py
  node tests/check_script.cjs
  node --check app.js
  git diff --check

Check the site in a browser at 390, 768 and 1440px, including no-JavaScript
rendering, language links, video, gallery keyboard focus and nested 404 URLs.
Publish through main at the repository root, preserving CNAME and .nojekyll.
After Pages deployment, repeat GET checks against the public domain; a local
preview does not prove that production is updated.

MEDIA (12 NOVEMBER 2026)
-----------------------
assets/media/2026-11-12 uses the supplied final Google Play promotional set:
8 localized panels per language, full 2560x1440 JPEGs and responsive WebP
thumbnails. The feature graphic is used for the video preview and social cards.
The provenance manifest records source names, dimensions and SHA-256 hashes.
EN trailer: https://www.youtube.com/watch?v=2kcBKRh4kio
PL trailer: https://www.youtube.com/watch?v=NbiudBc2cGA
assets/brand/nextpulse-20261112-* uses the sharp 2172x724 original banner.
The full-size WebP is lossless. The banner retains its 3:1 proportions and is
not cropped or stretched on mobile. Legacy media remains for existing links.

HOSTING / SEARCH
----------------
GitHub Pages controls HTTP/WWW/custom-domain redirects and directory slashes.
Do not add .htaccess rules or turn every missing URL into a homepage redirect.
Both / and /pl/ are canonical 200 pages. /index.html can remain a duplicate
200 with canonical /; it is excluded from the sitemap and internal navigation.
The Google Search Console "Page with redirect" report can include legitimate
redirect sources. It is not the separate "Redirect error" status.
