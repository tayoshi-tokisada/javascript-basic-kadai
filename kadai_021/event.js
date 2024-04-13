// 要素を定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// btnクリック時の処理
btn.addEventListener('click', () => {
  // 非同期処理　2秒後
  setTimeout(() => {
    // text書き換え
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});