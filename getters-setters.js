class Person {
	get Name() {
		return this.name;
	}

	set Name(name) {
		this.name = name;
	}
};

var boy = new Person();

boy.name = 'Yogesh';

console.log(boy.name);