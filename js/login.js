// 1. 로컬저장소에 저장된 username이 있는지 확인
// 2. username이 없는 경우 form을 보여주고 username 입력받은 후 submit 이벤트 실행
//  2-1. submit 시 기본으로 실행되는 동작을 막아줌
//  2-2. form을 숨겨주고 입력된 username 로컬저장소에 저장
//  2-3. greeting을 보여줌
// 3. username이 있는 경우 greeting을 보여줌

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  paintGreetings(inputUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}