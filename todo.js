// Get elements from the DOM
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const todoList = document.getElementById("todo-list");

// Create an array to store todos
const todos = [];

// Function to add a new todo
function addTodo() {
 const taskText = taskInput.value.trim();

 if (taskText !== "") {
  todos.push(taskText);
  taskInput.value = "";
  renderTodos();
 }
}

// Function to render todos
function renderTodos() {
 todoList.innerHTML = "";

 todos.forEach((todo, index) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
  todoList.appendChild(listItem);
 });
}

// Function to delete a todo
function deleteTodo(index) {
 todos.splice(index, 1);
 renderTodos();
}

// Event listeners
addButton.addEventListener("click", addTodo);
taskInput.addEventListener("keydown", (event) => {
 if (event.key === "Enter") {
  addTodo();
 }
});

// Initial rendering of todos
renderTodos();
