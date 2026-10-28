# Kengdudee Apps

Public developer landing page: https://kengdudee.github.io/apps/

The existing root `index.html` is intentionally preserved. GitHub Pages serves
the `master` branch from the repository root.

## Contents

- `apps/index.html`: buildless Thai/English landing page, support and existing
  privacy-policy links. `?lang=th` and `?lang=en` provide direct language links.
- `apps/assets/`: public Khamkui icon and locally served Itim font, with its
  existing SIL Open Font License.
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

Open http://127.0.0.1:4178/apps/ and check both languages at mobile and desktop
widths. There is no dependency installation or build step.

## Store and AdMob setup

Use https://kengdudee.github.io/apps/ as the developer website / Marketing URL
in the app's App Store listing. Once that link is public, AdMob can discover
https://kengdudee.github.io/app-ads.txt at the host root.

Publishing this site alone neither updates the App Store listing nor verifies
the app in AdMob. Request a crawl after the published listing points here.
Do not overwrite seller entries for other advertising partners when extending
`app-ads.txt`.
