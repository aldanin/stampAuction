const svelteConfig = require("./svelte.config");

module.exports = {
  transform: {
    "^.+\\.(ts|js)$": "babel-jest",
    "^.+\\.svelte$": [
      "jest-transform-svelte",
      {
        preprocess: svelteConfig.preprocess
      }
    ]
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/svelte/cleanup-after-each"
  ],
  moduleFileExtensions: ["ts", "js", "svelte"]
};
