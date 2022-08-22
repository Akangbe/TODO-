const Form = document.getElementById("form");
const Input = document.getElementById("input");
const TodoURL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = Input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerHTML = todoText;
    //add DOM
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    TodoURL.appendChild(todoEl);
    Input.value = "";
  }
}
function updateLS() {
  todosElH = document.querySelectorAll("li");

  const todos = [];
  todosElH.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerHTML,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
