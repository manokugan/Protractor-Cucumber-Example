var spec = require('./spec.js');
const mySpec = new spec();
var {
    When
} = require('cucumber');
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;


When('Change the operator to {string}', function (operator) {
    selectDropdownbyNum(mySpec.getOperator(), operator);
});


var selectDropdownbyNum = function (element, operator) {
    var opt = element.all(by.tagName('option'));
    opt.each(function (eachOperator) {
        eachOperator.getAttribute('value').then(function (value) {
            if (operator === '-' && value === 'SUBTRACTION') {
                eachOperator.click();
            } else if (operator === '*' && value === 'MULTIPLICATION') {
                eachOperator.click();
            } else if (operator === '/' && value === 'DIVISION') {
                eachOperator.click();
            }

        });
    });
};