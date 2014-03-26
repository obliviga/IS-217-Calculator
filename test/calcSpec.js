// Back-end tests
var expect = require("chai").expect;
var tags = require("../lib/calc.js");

describe("Calc", function(){
	
describe("#addition()", function(){
	it("adding two positive numbers should be positive", function(){
		var num1 = 1;
		var num2 = 2;
		var sum = num1 + num2;
		expect(sum).to.be.above(0);
	});
	
	it("adding two negative numbers should be negative", function(){
		var num1 = -1;
		var num2 = -2;
		var sum = num1 + num2;
		expect(sum).to.be.below(0);
	});
});

describe("#multiplication()", function(){
	it("multiplying two positive numbers should be positive", function(){
		var num1 = 1;
		var num2 = 2;
		var product = num1 * num2;
		expect(product).to.be.above(0);
	});
	
	it("multiplying two negative numbers should be positive", function(){
		var num1 = -1;
		var num2 = -2;
		var product = num1 * num2;
		expect(product).to.be.above(0);
	});
	
	it("multiplying two numbers with different signs should be negative", function(){
		var num1 = 1;
		var num2 = -2;
		var product = num1 * num2;
		expect(product).to.be.below(0);
	});
});

describe("#division()", function(){
	it("dividing two positive numbers should be positive", function(){
		var num1 = 1;
		var num2 = 2;
		var quotient = num1 / num2;
		expect(quotient).to.be.above(0);
	});
	
	it("dividing two negative numbers should be positive", function(){
		var num1 = -1;
		var num2 = -2;
		var quotient = num1 / num2;
		expect(quotient).to.be.above(0);
	});
	
	it("dividing two numbers with different signs should be negative", function(){
		var num1 = 1;
		var num2 = -2;
		var quotient = num1 / num2;
		expect(quotient).to.be.below(0);
	});
});

});