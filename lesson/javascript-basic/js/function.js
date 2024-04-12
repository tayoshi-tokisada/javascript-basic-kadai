// 朝の挨拶を出力する関数を定義
const sayGoodMorning = () => {
  console.log('おはようございます！');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

// 夜の挨拶を出力する関数を定義
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れさまでした。');
}

// 朝の挨拶を出力する関数を呼び出す
sayGoodMorning();

// 夜の挨拶を出力する関数を呼び出す
sayGoodEvening();

// 与えられた引数priceに送料を加算し、その値を出力する関数を定義
const calcTotal = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}

// 関数を呼び出し　引数として購入金額を渡す
calcTotal(1200 ,500);

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義
const double = (num) => {
  return num * 2;
}

// 関数の戻り値を出力
console.log(double(30));

// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
  const userName = '侍太郎';
  console.log(userName);
}

// 関数を呼び出す
useVariable();

// 関数の中で宣言した定数を関数の外で使う
console.log(userName);