const { devices } = require('@playwright/test');

const config = {
  outputDir: 'outputs/screenshots',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }],
  reporter: [
    ['html', { 
      open: 'never',
      outputFolder: 'outputs/html-test-reports' 
    }], 
    ['list']
  ],  
  use: {
      baseURL: 'https://www.phptravels.net/', 
      headless: true,
      ignoreHTTPSErrors: false,
      screenshot: 'only-on-failure',
      video: 'off'
    },
  };
  
  module.exports = config;