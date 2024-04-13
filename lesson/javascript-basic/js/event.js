// outout-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('くりっくされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// add-btnがクリックされた時のイベント処理
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const li = document.createElement('li');
  // li要素にテキストを追加する
  li.textContent = 'これはリスト要素です';
  // li要素をul要素の子要素として末尾に追加する
  parentList.appendChild(li);
});

// count-btnというidをもつHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされたときのイベント処理
countBtn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;
  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');

// HTML要素がクリックされたときにイベント処理を実行
areaBtn.addEventListener('click', () => {
  // 選択されたラジオボタンの値を取得する
  const area = document.forms.areaForm.area.value;
  // 取得した値を出力する
  console.log(area);
});

// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');

// HTML要素がクリックされたときのイベント処理
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;
  // 繰り返し処理でチェックボックスを１つずつ取り出す
  for(let i = 0; i < items.length; i++){
    // もし選択されていれば値を出力する
    if(items[i].checked){
      console.log(items[i].value);
    }
  }
});