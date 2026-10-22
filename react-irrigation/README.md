# Experiment 07: KisanSaathi React Demo

A simple React lab example for the Smart Irrigation case study.

- App passes the farmer, crop, plot and starting moisture as props.
- FarmInfo shows the details and uses useState for the moisture value.
- Add Water changes the sample moisture by 5 each click, from 40 up to 100.
- The sample advice changes at 60. This is only a classroom rule, not an AI
  recommendation or a reading from a real sensor. No water pump is controlled.

## Run

With Node.js and npm installed:

    cd react-irrigation
    npm install
    npm run dev

Open the local URL printed in the terminal. Reloading starts again at 40.
The public folder is for static files; the React components are in src.

## Commit and deployment

Deployment is optional for the lab; its screenshots can be taken locally.
To save the example in GitHub, commit this folder, including package.json and
pnpm-lock.yaml. Do not commit node_modules or dist.

To put this example online, create a separate Vercel project from the same
repository. Select react-irrigation as the Root Directory, Vite as the framework,
npm run build as the build command, and dist as the output directory. Leave the
existing static website's Vercel project settings as they are.
