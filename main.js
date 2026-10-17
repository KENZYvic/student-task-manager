// main.js - handles events and updates the page

// ES MODULES: import the functions exported from tasks.js
import { addTask, toggleTask, deleteTask, getStats } from "./tasks.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const errorMessage = document.querySelector("#error-message");
const taskList = document.querySelector("#task-list");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const pendingCount = document.querySelector("#pending-count");

let tasks = [];

// Draw the tasks and statistics on the page
function render() {
  let html = "";

  for (const task of tasks) {
    // DESTRUCTURING: take id, text and completed out of the task object
    const { id, text, completed } = task;

    // The id is stored on each button so we know which task was clicked.
    html += `
      <li class="task ${completed ? "completed" : ""}">
        <span class="task-text">${text}</span>
        <div>
          <button class="done-btn" data-id="${id}">${completed ? "Undo" : "Done"}</button>
          <button class="delete-btn" data-id="${id}">Delete</button>
        </div>
        </li>
    `;
  }

  if (tasks.length === 0) {
    html = `<li class="empty-message">No tasks yet. Add your first one above.</li>`;
  }

  taskList.innerHTML = html;

  // DESTRUCTURING again, this time on the stats object
  const { total, completed, pending } = getStats(tasks);
  totalCount.textContent = total;
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
}


form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const text = input.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a task first.";
    return;
  }

  errorMessage.textContent = "";
  tasks = addTask(tasks, text);
  input.value = "";
  render();
});

// EVENT DELEGATION: ONE listener on the list handles every button.
taskList.addEventListener("click", function (event) {
  // event.target is the exact element that was clicked
  const clicked = event.target;
  const id = Number(clicked.getAttribute("data-id"));

  if (clicked.classList.contains("done-btn")) {
    tasks = toggleTask(tasks, id);
    render();
  }

  if (clicked.classList.contains("delete-btn")) {
    tasks = deleteTask(tasks, id);
    render();
  }
});

render();
