'use strict';

function setClock() {
  let dateInfo = new Date();
  let hour = modifyNumber(dateInfo.getHours());
  let min = modifyNumber(dateInfo.getMinutes());
  let sec = modifyNumber(dateInfo.getSeconds());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  let date = dateInfo.getDate();
  let dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
    dateInfo.getDay()
  ];
  document.getElementById('time').innerHTML = hour + ':' + min;
  document.getElementById(
    'date'
  ).innerHTML = `${month}월 ${date}일 (${dayOfWeek})`;
}
function modifyNumber(time) {
  if (parseInt(time) < 10) {
    return '0' + time;
  } else return time;
}
window.onload = function () {
  setClock();
  setInterval(setClock, 1000); //1초마다 setClock 함수 실행
};