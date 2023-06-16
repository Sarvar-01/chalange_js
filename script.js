const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

function addTask() {
  if (newTaskInput.value !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.innerText = newTaskInput.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      removeTask(taskItem);
    });
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    tasks.push(newTaskInput.value);
    newTaskInput.value = "";
  }
}

function removeTask(taskItem) {
  const taskText = taskItem.getElementsByClassName("task-text")[0].innerText;
  const index = tasks.indexOf(taskText);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  taskList.removeChild(taskItem);
}

addTaskBtn.addEventListener("click", addTask);

newTaskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});