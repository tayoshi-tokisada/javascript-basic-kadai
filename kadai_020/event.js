// 要素を定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// btnクリック時の処理
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});