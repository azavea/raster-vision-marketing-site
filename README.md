# Raster Vision Marketing Site

The redesigned marketing site for the Raster Vision repo.

**Requirements**

- [Node.js](https://nodejs.org/en/download/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [jQuery](https://jquery.com/download/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

**Development**

To compile the code with Tailwind CSS and update on style change, run `npx tailwindcss -i ./src/input.css -o ./src/dist/output.css --watch`.

In another tab, start the server by running `npm start`. View at localhost:8000. Refresh to see changes.

**Deployment**

This project uses GitHub Actions to deploy to GitHub Pages. To trigger a rebuild from the command line, run `npm run deploy`.
