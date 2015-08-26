//Compute functions can be used to create functions in run-time, when you do not want
//to hard code the function name but take it from database



//Example 1

var method = 'Yogesh';

class Compute {
	['compute' + 'function']() {
		console.log('You just called compute method');
	}

	[method]() {
		console.log('My name is Yogesh');
	}
}

var compute = new Compute();
compute.computefunction();
compute.Yogesh();


//Example 2

class List {
	constructor(list) {
		this.list = list;
	}

	*[Symbol.iterator]() {
		for(let item of this.list) {
			yield item;
		}
	}
}

var collection = ['Yogesh', 'Lucky', 'Manish'];
var list = new List(collection);

for(let item of list) {
	console.log(item);
}