// 1. setInterval의 간격이 1초이므로 시작시 바로 실행되게 getClock() 최초 실행
// 2. setInterval()에서 getClock()을 1초 간격으로 반복실행
// 3. getClock()은 현재 시간, 분, 초를 받아옴 (항상 2자리로 표현되게 padStart 이용)

const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock(); 
setInterval(getClock, 1000);