/*
// 関数の定義
function sayHello() {
    // 実行したい処理
    console.log("こんにちは");
}

// 関数の呼び出し
sayHello(); // こんにちは
*/

function sayHello(name) {
    console.log("こんにちは" + name);
}

sayHello("太郎");
sayHello("花子");
sayHello("二郎");
sayHello("岬");

// 演習：商品の値段表示

callFunc("#product1", 3000);
callFunc("#product2", 5000);
callFunc("#product3", 7000);
callFunc("#product4", 10000);
callFunc("#product5", 13000);

// 関数の定義
// HTML要素(タグ) => element => elm
function callFunc(elm, price) {
    // const => 定数　第1引数で指定された要素を代入
    const element = document.querySelector(elm);
    // .textContent => elementのテキストを書き換え
    // price => 第2引数で指定された要素を表示
    element.textContent = "商品の値段は" + price + "円です。";
}