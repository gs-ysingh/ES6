class Person {
	constructor(name) {
		this.name = name;
	}

	toString() {
		console.log('My name is ' + this.name);	
	}
};

class Man extends Person {
	constructor(name, age) {
		super(name);
		this.age = age;
	}

	toString(name, age) {
		super.toString();
		console.log('My age is ' + this.age);
	}
};

class Child extends Man {
	constructor(name, age, numOfChildren) {
		super(name, age);
		this.numOfChildren = numOfChildren;
	}

	toString() {
		super.toString();
		console.log('Total children ' + this.numOfChildren);
	}
};

var child = new Child('Yogesh', 27, 0);
child.toString();