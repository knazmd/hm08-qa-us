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
    baseUrl: 'https://14a0d424-08f7-41c1-bb2d-862ec779af27.serverhub.practicum-services.com',
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