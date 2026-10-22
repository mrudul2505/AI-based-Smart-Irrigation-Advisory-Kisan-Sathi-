# Experiment 08 Simple React SPA

Beginner React example for the KisanSaathi smart irrigation case study.
Home, Farms and About use React Router. Farms shows three sample records using map().
The values are fixed examples; there is no sensor connection or backend.

## Run locally

From this folder run:

```sh
npm install
npm run dev
```

Open the local address printed by Vite. The lab screenshots were captured locally.

## Commit and deployment

No deployment is required for the write-up. To save the source on GitHub, commit
this folder, including package.json and pnpm-lock.yaml. Do not commit node_modules
or dist. Experiment 07 remains in the separate react-irrigation folder.

For an optional online demo, create a separate Vercel project with Root Directory
react-irrigation-spa, framework Vite, build command npm run build, and output dist.
Do not change the existing static website's project settings. BrowserRouter also
needs the included vercel.json rewrite so direct route visits load index.html.
