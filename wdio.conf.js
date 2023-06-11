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
    baseUrl: 'https://2b57bf1d-7ec1-4c35-b699-784768197b05.serverhub.practicum-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 12000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'geckodriver', 'intercept'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}