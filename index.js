// グローバルオブジェクト
console.log("Hello World");
console.log(__dirname);
console.log(__filename);

setTimeout(() => {
  console.log("setTimeout()");
},100)

console.log("global");

var end = (new Date()).getTime() + 3000;
while ((new Date()).getTime() < end) {}

// イベントループ
setTimeout(() => {
  console.log("setTimeout()");
},100)

setImmediate(() => {
  console.log("setImmediate()");
})

process.nextTick(() => {
  console.log("nextTick()");
})

Promise.resolve().then(() => {
  console.log("Promise.resolve().then()");
})


// ログ出力
console.log("Hello");
console.trace("World");
console.log("Message: o%", {hello: "world"} );