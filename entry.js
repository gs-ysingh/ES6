/**
 * Created by YSingh on 14/01/17.
 */

var Person = require('./Class/classes.js');
var Product = require('./Rest Spread/index.js');

var person = new Person("Yogesh Singh");

document.write(person.toString());
document.write("<br/>")
document.write(Product(1, 2, 3, 4, 5));