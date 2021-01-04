// module.jsを読み込み/出力
var message = require("./module/module.js");
console.log(message);

// methodsより読み込み
var {echo, area} = require("./module/methods.js");
var Lamborghini = require("./module/lamborghini.js");
var Car = require("./module/cars.js");
var config = require("./module/config.js");

echo("Hello World!");
console.log(area(5, 10));

var car = new Lamborghini("lamborghini");
car.echo();
car.drive();

// config.jsより読み込み
var config = require("./module/config.js");

console.log(JSON.stringify(config));

// .jsなしでも可能
var a = require("./lib/module-a/index");
a();

// indexedDB.js、bからaを呼ぶ
var b = require("./lib/module-b/index");
b();

// EventEmitter
var Clock = require("./event-emitter/clock");
var i = 0;
var clock = new Clock();

clock.on("tick", () => {
  console.log(++i);
  if(i>3) {
    clock.stop();
  }
});

clock.start();

// Eventを設定する
var EventEmitter = require("events");
var ee = new EventEmitter();
var ontick = function() {
  console.log("event is called");
  ee.off("event", ontick);
};

ee.on("event", ontick);

ee.emit("event");
ee.emit("event");