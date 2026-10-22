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

MEDIA
-----
assets/brand/NextPulse_Games_baner.jpg is the supplied original (4096x2304).
The 768/1536/2048px WebP files are responsive derivatives, not a new design.
assets/screens/4.0-40-20261022 contains 8 newly captured scenes per language,
full 1920x1080 JPEGs, 960px WebP thumbnails and a provenance manifest.
The gallery, social images and video preview use these current captures.
The existing PL/EN YouTube videos are labelled as earlier footage, not as the
latest local build. Legacy unused media is retained to avoid breaking links.

HOSTING / SEARCH
----------------
GitHub Pages controls HTTP/WWW/custom-domain redirects and directory slashes.
Do not add .htaccess rules or turn every missing URL into a homepage redirect.
Both / and /pl/ are canonical 200 pages. /index.html can remain a duplicate
200 with canonical /; it is excluded from the sitemap and internal navigation.
The Google Search Console "Page with redirect" report can include legitimate
redirect sources. It is not the separate "Redirect error" status.
