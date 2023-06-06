exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
        {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
   
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://24fe807e-a7c7-4473-8cf1-fe75aaaea6fc.serverhub.practicum-services.com',
    waitforTimeout: 1000,
    connectionRetryTimeout: 1200,
    connectionRetryCount: 3,
    services: ['chromedriver', 'geckodriver', 'intercept'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}