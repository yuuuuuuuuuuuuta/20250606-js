// 配列の宣言
let sampleArray = new Array();

// 配列の要素
let fruits = ["りんご", "みかん", "ぶどう"];

// console.log(fruits);
console.log(fruits[0]); // りんご

// 配列の要素の追加
// 末尾に追加
fruits.push("バナナ");
console.log(fruits); // ["りんご", "みかん", "ぶどう", "バナナ"]

// 先頭に追加
fruits.unshift("もも");
console.log(fruits); // ["もも", "りんご", "みかん", "ぶどう", "バナナ"]

// 
fruits[4] = "なし";
console.log(fruits); // ["もも", "りんご", "みかん", "ぶどう", "なし"]