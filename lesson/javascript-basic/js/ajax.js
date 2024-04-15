// 東京都の天気予報データを取得するためのURL
const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
// 取得イベント処理ボタン
const btn = document.getElementById('ajax-btn');

// ダミーデータを送信するためのURL
const sendUrl = 'https://jsonplaceholder.typicode.com/posts';
// 送信イベント処理ボタン
const sendBtn = document.getElementById('send-btn');

// 取得ボタンクリック時のイベント処理
btn.addEventListener('click', () => {
  // 気象庁のサイトにリクエストを送信し、天気予報データを取得する
  fetch(url)
    // サーバーからAjaxレスポンスを受け取ったときの処理
    // JSON形式のデータに変換
    .then((response) => response.json())
    // JSONデータから「東京の明日の天気」を抽出して表示
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      console.log('東京の明日の天気：' + weather);
    });
});

// 送信ボタンクリック時のイベント処理
sendBtn.addEventListener('click', () => {
  // 送信するダミーデータ
  const dummyData = {name: '侍太郎', age: 30};

  // ダミーサーバーにAjaxリクエストを送信する
  fetch(sendUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dummyData) // JSON形式に変換
  })
    .then((response) => response.json()) // JSON形式に変換
    .then((data) => {
      // サーバーから受け取ったダミーデータを変換して表示
      console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2));
    });
});