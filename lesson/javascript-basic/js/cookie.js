// サーバーがないとできません

// cookieを取得する関数
const getCookie = (name) => {
  // ;で区切り、配列で取得
  const cookies = document.cookie.split(';');
  // cookieを１つずつチェック
  for(let i = 0; i < cookies.length; i++){
    // =でcookieを分割し、cookie名と値を取得
    const [cookieName, value] = cookies[i].trim().split('=');
    // cookie名が一致したら、その値をでコードしてreturn
    if(cookieName === name){
      return decodeURIComponent(value);
    }
  }
  // 見つからないかったら空文字return
  return '';
};

// cookieを取得して画面に表示
document.getElementById('output').textContent = 'name=' + getCookie('name') + 'age=' + getCookie('age');
console.log(document.cookie);

// cookie作成
document.cookie = 'name=' + encodeURIComponent('侍太郎') + '; max-age=60*60';
document.cookie = 'age=30; max-age=60*60';