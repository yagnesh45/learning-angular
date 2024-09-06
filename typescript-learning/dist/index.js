"use strict";
/*  Install TypeScript using npm:
* command: npm i -g typescript => -g installs it globally instead of project workspace

* Use tsc --init command to create a configuration file which is used by tsc command
  for compiling the .ts file to vanilla js file.
* To compile the ts file use: tsc <filename>.ts or simply use tsc to compile all the ts
  files present in current working directory.
* To watch over particular file use - tsc --watch <filename>.ts
*/
let id = 5;
console.log(`ID: ${id}`);
// Basic Types
// let name: string = "Yagnesh";
let isFlag = true;
let anyVar = "Anything";
anyVar = false; // It will not throw error.
// Array
let arr = [34, 6, 34, 67, 76, 23, 56, 762];
// or
let arr2 = [];
// arr2.push("Lol"); //error
// Tuple - Creates a tuple with elements in specific order of type specified
let user = ["Yagnesh", "Patil", 21, true];
// Tuple Array
let user2;
user2 = [
    ["Yagnesh", 21],
    ["none", 0],
];
// Union - will allow more than one types can be assigned to var
let mixVar;
mixVar = "String";
mixVar = 5000;
mixVar = true;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 20] = "Up";
    Direction1[Direction1["Down"] = 21] = "Down";
    Direction1[Direction1["Left"] = 22] = "Left";
    Direction1[Direction1["Right"] = 23] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "20";
    Direction2["Down"] = "What";
    Direction2["Left"] = "Is";
    Direction2["Right"] = "This";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const userData = {
    name: "Yagnesh",
    age: 21,
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
// or
let customerId = cid;
// Functions
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 10));
function noReturnFun(var1) {
    console.log("No return function " + var1);
}
noReturnFun("Nothing");
const userInterfaceData = {
    name: "Yagnesh",
    age: 21,
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class UserClass {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return this.name + " is registered";
    }
}
const yagnesh = new UserClass(1, "Yagnesh Patil", 21);
console.log(yagnesh);
console.log(yagnesh.register());
// Sub class
class Employee extends UserClass {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
    register() {
        return `${this.name} is registered as ${this.position}`;
    }
}
const emp = new Employee(3, "Yagnesh1", 24, "Software Engineer");
console.log(emp.register());
// Generics - Functions that accepts any same type of arguments
function getArray(items) {
    return new Array().concat(items);
}
let numsArray = getArray([3, 5, 6, 6, 5]);
let strArray = getArray(["yag", "nest", "pat"]);
// numsArray.push("str"); // throws an error as we are trying to add string element to numbers array
// strArray.push(0); // Same as above
