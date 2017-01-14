class Person {
	constructor(name) {
		this.name = name;
	}

	toString() {
		return this.name;
	}
};

class Man extends Person {
	constructor(name, age) {
		super(name);
		this.age = age;
	}

	toString(name, age) {
		return 'Name: ' + this.name + ', Age: ' + this.age;
	}
};

class Child extends Man {
	constructor(name, age, numOfChildren) {
		super(name, age);
		this.numOfChildren = numOfChildren;
	}

	toString() {
		return 'Name: ' + this.name + ', Age: ' + this.age + ', Number of children: ' + this.numOfChildren;
	}
};

export {
	Person,
	Man,
	Child
}