//We have block scope in ES6. See the difference between let and var

if(true) {
	var i = 5;

	console.log(i); //5
}


console.log(i); //5.


if(true) {
	let i = 5;

	console.log(i); //5
}

console.log(i); //i is not defined in ES6.