exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './features/calculation.feature'
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: 'step_definition/*.js',
    }
}