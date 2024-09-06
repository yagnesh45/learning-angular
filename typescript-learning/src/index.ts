/*  Install TypeScript using npm: 
* command: npm i -g typescript => -g installs it globally instead of project workspace

* Use tsc --init command to create a configuration file which is used by tsc command
  for compiling the .ts file to vanilla js file.
* To compile the ts file use: tsc <filename>.ts or simply use tsc to compile all the ts
  files present in current working directory.
* To watch over particular file use - tsc --watch <filename>.ts
*/

let id: number = 5;

console.log(`ID: ${id}`);

// Basic Types
// let name: string = "Yagnesh";
let isFlag: boolean = true;
let anyVar: any = "Anything";
anyVar = false; // It will not throw error.

// Array
let arr = [34, 6, 34, 67, 76, 23, 56, 762];
// or
let arr2: number[] = [];
// arr2.push("Lol"); //error

// Tuple - Creates a tuple with elements in specific order of type specified
let user: [string, string, number, boolean] = ["Yagnesh", "Patil", 21, true];
// Tuple Array
let user2: [string, number][];

user2 = [
  ["Yagnesh", 21],
  ["none", 0],
];

// Union - will allow more than one types can be assigned to var
let mixVar: string | number | boolean;
mixVar = "String";
mixVar = 5000;
mixVar = true;

// Enum
enum Direction1 {
  Up = 20,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "20",
  Down = "What",
  Left = "Is",
  Right = "This",
}

console.log(Direction2.Down);

// Objects
type UserType = {
  name: string;
  age: number;
};

const userData: UserType = {
  name: "Yagnesh",
  age: 21,
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
// or
let customerId = cid as number;

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(5, 10));

function noReturnFun(var1: string): void {
  console.log("No return function " + var1);
}

noReturnFun("Nothing");

// Interfaces
interface UserInterface {
  name: string;
  readonly age: number; // readonly property
  address?: string; // Optional property
}

const userInterfaceData: UserInterface = {
  name: "Yagnesh",
  age: 21,
};

// userInterfaceData.age = 23; // throws error as this property is readonly in interface

// Interface function - Specifies type and schema that function having this interafce type must follow
interface MathFun {
  (x: number, y: number): number;
}

const add: MathFun = (x: number, y: number): number => x + y;
const sub: MathFun = (x: number, y: number): number => x - y;

// Interface for Class

interface UserClassInterface {
  name: string;
  id: number;
  age: number;
  address?: string; // Optional property
  register(): string;
}

// Classes
class UserClass implements UserClassInterface {
  //   3 access modifiers - public, private and protected.
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
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
  public position: string;

  constructor(id: number, name: string, age: number, position: string) {
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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numsArray = getArray<number>([3, 5, 6, 6, 5]);
let strArray = getArray<string>(["yag", "nest", "pat"]);

// numsArray.push("str"); // throws an error as we are trying to add string element to numbers array
// strArray.push(0); // Same as above
