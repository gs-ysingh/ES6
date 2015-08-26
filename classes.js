class Person {
	constructor(name) {
		this.name = name;
	}

	toString() {
		console.log('My name is ' + this.name);	
	}
};

var x = new Person('Yogesh');

x.toString();
