//Buffer
console.log("\nBuffer:");

const { Buffer } = require("node:buffer");
const a = Buffer.from("Mama mila ramy");
a.toString("utf8");
console.log(a);
console.log(a.toString("utf8"));

//EventEmmiter
console.log("\nEventEmitter:");

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventName = "greet";

emitter.on(eventName, function (username) {
  console.log("Emit event:", username);
});

class User {
  constructor(username, emitter) {
    this.name = username;
    this.emitter = emitter;
  }
  sayHi() {
    console.log("Привет. Меня зовут", this.name);
    this.emitter.emit(eventName, this.name); // генерируем событие, передаем обработчику имя
  }
}

const tom = new User("Tom", emitter);
tom.sayHi();
//References
console.log("\nREFERENCES:");
var b = 5;
var c = b;
b = 6;
console.log("\nB:\t", b);
console.log("C:\t", c);

var obj = {
  valueNumber: 15,
  valueString: "this is string",
};
var refObj = obj;

console.log("\nOBJ:\t", obj);
console.log("REFOBJ:\t", refObj, "\n");

refObj.valueNumber = 20;
refObj.valueString = "new string!";

console.log("AFTER CHANGE REFOBJ:");
console.log("OBJ:\t", obj);
console.log("REFOBJ:\t", refObj, "\n");

console.dir(obj);
