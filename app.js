const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet"; //Объект без ивента

//вешаем ивент на объект, но не вызываем
emitter.on(eventName, function(){
    console.log("Привет!");
});
//вешаем ивент на объект, но не вызываем
emitter.on(eventName, function(){
    console.log("Hello all!");
});

 
emitter.emit(eventName);