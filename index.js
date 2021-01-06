// // module.jsを読み込み/出力
// var message = require("./module/module.js");
// console.log(message);

// // methodsより読み込み
// var {echo, area} = require("./module/methods.js");
// var Lamborghini = require("./module/lamborghini.js");
// var Car = require("./module/cars.js");
// var config = require("./module/config.js");

// echo("Hello World!");
// console.log(area(5, 10));

// var car = new Lamborghini("lamborghini");
// car.echo();
// car.drive();

// // config.jsより読み込み
// var config = require("./module/config.js");

// console.log(JSON.stringify(config));

// // .jsなしでも可能
// var a = require("./lib/module-a/index");
// a();

// // indexedDB.js、bからaを呼ぶ
// var b = require("./lib/module-b/index");
// b();

// // EventEmitter
// var Clock = require("./event-emitter/clock");
// var i = 0;
// var clock = new Clock();

// clock.on("tick", () => {
//   console.log(++i);
//   if(i>3) {
//     clock.stop();
//   }
// });

// clock.start();

// // Eventを設定する
// // var EventEmitter = require("events");
// // const { once } = require("process");
// // var ee = new EventEmitter();
// // var ontick = function() {
// //   console.log("event is called");
// //   ee.off("event", ontick);
// // };

// // ee.on("event", ontick);

// // ee.emit("event");
// // ee.emit("event");

// // once
// // var EventEmitter = require("events");
// // var ee = new EventEmitter();
// // var ontick = function() {
// //   console.log("event is called");
// // };

// // ee.once("event", ontick);

// // ee.emit("event");
// // ee.emit("event");

// // function, arrow
// // var EventEmitter = require("events");
// // var ee = new EventEmitter();

// // ee.on("event", function() {
// //   console.log("function: \r\n", this);
// // });

// // ee.on("event", () => {
// //   console.log("arrow: \r\n", this);
// // });

// // ee.emit("event");

// // 実行順序
// var EventEmitter = require("events");
// var ee = new EventEmitter();

// ee.on("event", () => {console.log("event 1st");});
// ee.on("event", () => {console.log("event 2st");});
// ee.on("event", () => {console.log("event 3st");});

// ee.emit("event");

// // パス
// var path = require("path");
// var filepath = "dev/node-js/sample/index.js";
// console.log(path.dirname(filepath));
// console.log(path.basename(filepath));
// console.log(path.extname(filepath));
// console.log(path.join("dev/node-js/sample", "index.js"));
// console.log(path.normalize("dev/node-js/sample/lib/../index.js"));

// ファイル読み込み(同期)
// var fs = require("fs");
// var path = require("path");

// var data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
// console.log(data);

// fs.writeFileSync(path.join(__dirname, "sample-copy.txt"), data, "utf8");

// 非同期
// var fs = require("fs");
// var path = require("path");

// fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
//   if(err){
//     console.log(err.message);
//     return;
//   }
//   console.log(data);
//   fs.writeFile(path.join(__dirname, "sample-copy2"), data, "utf8", (err) => {
//     if(err) {
//       console.log(err.message);
//       return;
//     }
//     console.log("OK");
//   });
// });

// 非同期のネストをPromise化してネストを解消
// var fs = require("fs");
// var path = require("path");
// var util = require("util");

// var readFile = util.promisify(fs.readFile);
// var writeFile = util.promisify(fs.writeFile);

// readFile(path.join(__dirname, "sample.txt"), "utf8")
//   .then((data) => {
//     return writeFile(path.join(__dirname, "sample-copy3.txt"), data, "utf8");
//   })
//   .then(() => {
//     console.log("OK");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// async, awaitに書き換え
var fs = require("fs");
var path = require("path");
var util = require("util");

var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);

(async function() {
  try {
    var data = await readFile(path.join(__dirname, "sample.txt"), "utf8");
    await writeFile(path.join(__dirname, "sample-copy4.txt"), data, "utf8");
    console.log("OK");
  } catch (error) {
    console.log(err.message);
  }
})();