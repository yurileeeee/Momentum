const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // 로컬 저장소에 string 형태로 저장
}

function deleteToDo(event){
  const li = event.target.parentElement;  // 어떤 li를 지우려 하는지 받아옴
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 지우려는 아이디와 toDos의 아이디가 같으면 삭제
  saveToDos(); // 삭제한 toDos 저장
}

function paintToDo(toDo){
  const li = document.createElement("li");
  li.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span); // <li><span></span></li> 형태로 만듦
  li.appendChild(btn);
  toDoList.appendChild(li); // html의 ul에 li 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();   // submit의 기본 동작을 막아줌
  const newToDo = toDoInput.value; // 입력받은 값 저장
  toDoInput.value = "";  // 입력 후 input 칸이 비워지도록 함
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // toDos 배열에 obj push
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 저장된 toDo가 있을 경우 화면에 보여주기
  parsedToDos.forEach(paintToDo); 
};