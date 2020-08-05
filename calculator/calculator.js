function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

function multiply (arr) {
	let product = 1
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i]
	}
	return product
}

function power(a, b) {
	return a ** b
}

function factorial(a) {
	if (a == 0) {
		return 1
	}
	else if (a == 1 || a == 0) {
		return a * 1
	}
	else {
		return a * factorial(a - 1)
	}
}
add(0,0)
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}