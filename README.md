# HS Auto &amp; Trucking Services

Static informational website for **HS Auto &amp; Trucking Services** (also styled H&amp;S Auto &amp; Truck Services), a family-run auto and truck repair shop in Kearny, NJ that has been serving the area since 2010.

**Live site:** https://hs-auto-trucking-services.web.app/

## About the site

This is a marketing/informational website — there is no login, database, or backend business logic. It exists to tell customers who the shop is, what it does, where to find it, and how to get in touch. Content is hard-coded in the React components; updating the site means editing that content and redeploying.

### Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — banner, mission statement, service highlights, customer reviews, partners |
| `/about` | Company background and history |
| `/services` | Detailed descriptions of Auto Repair, Auto Body, Car Diagnostics, and Emergency &amp; Towing |
| `/contact` | Phone, email, hours, address, and an embedded map |
| `/help` | Frequently asked questions (hours, payment methods, financing, languages, services offered) |
| `/sitemap` | Simple list of site links |

### Business details (as published on the site)

- **Address:** 250 Davis Ave, Kearny, NJ 07032 (across from the Kearny High School football field)
- **Phone:** (551) 580-7286
- **Hours:** Mon–Fri 8am–6pm, Sat 8am–3pm
- **Services:** oil &amp; filter changes, battery replacement and delivery, brakes, tire alignment, auto body work, engine and transmission installations, mufflers, computer diagnostics, ignition interlock (install/calibrate/reset/remove), emergency towing, and work on company/fleet vehicles
- **Payments:** cash, check, and major credit cards; interest-free financing available
- **Languages:** English, Spanish, Portuguese

## Tech stack

- [Create React App](https://github.com/facebook/create-react-app) (`react-scripts` 3.4.1), React 16
- `react-router-dom` for client-side routing
- `react-reveal` / `react-slideshow-image` for animation and the banner carousel
- Font Awesome for icons
- Hosted on **Firebase Hosting** (project `solorzke-websites`, site `hs-auto-trucking-services`)

## Local development

```bash
yarn install
yarn start        # dev server at http://localhost:3000
```

## Build

`react-scripts` 3.4.1 predates modern Node's OpenSSL, so the legacy provider flag is required on Node 17+:

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn build
```

The production bundle is written to `build/`.

## Deploy

Deploys go to Firebase Hosting. Requires the Firebase CLI and access to the `solorzke-websites` project.

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn build
firebase deploy --only hosting
```

Hosting configuration lives in `firebase.json` (SPA rewrite of all routes to `index.html`) and `.firebaserc` (default project).

> The repo also contains a small Express server (`server/server.js`) left over from a previous Heroku deployment. It is not used by Firebase Hosting and can be removed if it's no longer needed elsewhere.
