module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "npm run type-check",
  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    `npm run lint . ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],
}
