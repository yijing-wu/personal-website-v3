# My Personal Website V3

The third version of my personal website built with React + TypeScript + Vite, integrated with Google Analytics, and hosted on GitHub Pages.

## Set Up & Quick Start
1. Git clone the repo
2. Install and use the correct version of Node and npm
   ```bash
   # check version
   node --version
   npm --version
   ```
3. `cd personal-website-v3`
4. `npm install`
5. `npm run dev`

## Deploying to GitHub Pages
- Use the .github/workflows/main.yml GitHub Action workflow for automatic deployment on push to main branch.
- (optional) If not using the custom domain, set `base` in `vite.config.ts` to `"/personal-website-v3/"` and `basename` in `App.tsx` router to `"/personal-website-v3"`.
- Run `npm run build` to generate production files in the `dist` folder and check if everything works with `npm run preview`.
- Push to main branch to trigger GitHub Action for deployment.
