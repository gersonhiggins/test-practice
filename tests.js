const string = require('./index');
const reverseString = require('./reverseString');
const Calc = require('./calculator');
const capitalString = require('./capital');
const assert = require('assert');

describe('String', function() {
    it('string("Hello") should return a 5', function() {
        assert(string('Hello') === 5);
    })
    it('string("") should return "String its null"', function() {
        assert(string("") === "String its null")
    })
    it('string("hello how are you") should return "Too Long"', function() {
        assert(string("hello how are you") === "Too long")
    })
})
describe ('ReverseSting', function() {
    it('reverseString("Hello") should return "olleH"', function() {
        assert(reverseString('Hello') === "olleH");
    })
})
describe('Calculator', function() {
    it('Sum, Sub, Mul, Div', function() {
        const calc = new Calc()
        assert(calc.sum(2,5) === 7);
        assert(calc.multiply(2,4) === 8)
        assert(calc.sub(6,2) === 4)
        assert(calc.divide(9,3) === 3)
    })
})
describe('Capitalized', function() {
    it('First String letter capitalized', function() {
        assert(capitalString('hello') === "Hello")
    })
})