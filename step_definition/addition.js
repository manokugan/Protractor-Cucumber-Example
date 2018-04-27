    var spec = require('./spec.js');
    const mySpec = new spec();
    var {
        Given
    } = require('cucumber');
    var {
        Then
    } = require('cucumber');
    var {
        When
    } = require('cucumber');
    var chai = require('chai').use(require('chai-as-promised'));
    var expect = chai.expect;

    Given('I have launched the application', function () {
        return browser.get('http://juliemr.github.io/protractor-demo/');
    });

    When('I enter numberone {string}', function (number, callback) {
        mySpec.enterFirstNumber(number);
        callback();
    });

    When('I enter numbertwo {string}', function (number, callback) {
        mySpec.enterSecondNumber(number);
        callback();
    });
    Then('I see the answer is equal to {int}', function (value, callback) {
        mySpec.clickGoButton();
        mySpec.getLatestResult().then(console.log);
        expect(mySpec.getLatestResult()).eventually.equal(String(value)).notify(callback);
    });