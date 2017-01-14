/**
 * Created by YSingh on 14/01/17.
 */

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();

gen.next(); //goes till first yield and executes till that
gen.next(); //goes till second yield and executes till that
gen.next(); //goes till thirs yield and executes till that

//for of loop works perfectly with generators

const arr = [];
for(let color of colors()) {
    arr.push(color);
}

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2