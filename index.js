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
var config = require("./module/config.js")

console.log(JSON.stringify(config));