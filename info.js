// 環境変数を表示
console.log(JSON.stringify(process.env, null, 2));

// 実行時引数を表示
for (var i = 0; i < process.argv.length; i++) {
  console.log(`${i} : ${process.argv[i]}`);
}

// カレントワークディレクトリを表示
console.log(`cwd() : ${process.cwd()}`);
console.log(`__dirname : ${__dirname}`);

// 実行環境表示
console.log(process.platform);