# Kengdudee Apps

App directory: https://kengdudee.github.io/apps/
Khamkui product page: https://kengdudee.github.io/apps/khamkui/

The existing root `index.html` is intentionally preserved. GitHub Pages serves
the `master` branch from the repository root.

## Contents

- `apps/index.html`: buildless Thai/English directory linking to each app.
- `apps/khamkui/index.html`: Khamkui details, App Store link, support and existing
  privacy-policy links. Both pages support `?lang=th` and `?lang=en`, and internal
  navigation preserves the selected language.
- `apps/assets/`: public Khamkui icon and locally served Itim font, with its
  existing SIL Open Font License, shared styles and language-switching script.
- `/app-ads.txt`: the account-level authorized-seller entry for AdMob publisher
  `pub-5155655533827559`. Keep it at the domain root, not inside `/apps/`.

No analytics, pixels, cookies, embedded ads or third-party JavaScript are added
by this page. GitHub Pages still processes hosting requests under GitHub's
policies. App privacy links continue to use the existing policy gist.

## Preview

From the repository root:

```sh
python3 -m http.server 4178 --bind 127.0.0.1
```

Check both /apps/ and /apps/khamkui/ in Thai and English at mobile and desktop
widths. There is no dependency installation or build step.

## Store and AdMob setup

Use https://kengdudee.github.io/apps/khamkui/ as Khamkui's Marketing URL.
Future apps should have their own /apps/<app-slug>/ page and a directory entry.
Keep /apps/ as the directory, not a redirect to one app. Once the app's developer
website link is public, AdMob can discover
https://kengdudee.github.io/app-ads.txt at the host root.

Publishing this site alone neither updates the App Store listing nor verifies
the app in AdMob. Request a crawl after the published listing points here.
Do not overwrite seller entries for other advertising partners when extending
`app-ads.txt`.
