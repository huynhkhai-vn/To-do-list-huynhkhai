// script.js

// DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task function
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.color = "red";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input
  }
});

// Dynamic background
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#8D33FF"];
setInterval(() => {
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}, 3000);
