// 今日の日付を取得
const today = new Date();

// 今日の日付を「年月日」に整える
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();
const todayYMD = todayYear + '年' + todayMonth + '月' + todayDate + '日';

// コンソールに出力
console.log(todayYMD);