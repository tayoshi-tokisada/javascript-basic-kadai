// クラスを定義
class Product{
  // インスタンス化すると同時に処理を実行（初期化）する
  constructor(name, price, category){
    console.log('敏感肌にも優しい100％天然由来のシャンプーです。');
    // インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // メソッドを定義
  describe(){
  console.log('この商品名は' + this.name + 'です。');
  }
}

// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

// インスタンスの値を出力
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す
shampoo.describe();

// 通常のオブジェクトにメソッドを定義
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log(user.name + '、' + user.age + '、' + user.gender + 'です！' + 'よろしくお願いします！');
  }
}

// メソッドを呼び出す
user.greet();