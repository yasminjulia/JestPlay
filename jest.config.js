// Sync object
/* @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
  };
  
  module.exports = config;
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
    };
  };


  module.exports = {
    preset: 'jest-playwright-preset',
    "testEnvironment": "./CustomEnvironment.js",
    "reporters": [
      "default",
      ["jest-html-reporters", {
        "publicPath": "./html-report",
        "filename": "report.html",
        "expand": true
      }]
    ]
  }