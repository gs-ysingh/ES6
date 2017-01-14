class Person {
	constructor(name) {
		this.name = name;
	}

	toString() {
		return this.name;
	}

	get Name() {
		return this.name;
	}

	set Name(name) {
		this.name = name;
	}
};

module.exports = Person;
