// main.js — JavaScript will be added in Checkpoint 4
// main.js — Checkpoint 4

// Step 1 — Grab the elements from the HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Step 2 — When the button is clicked, add the task
addTaskBtn.addEventListener('click', function () {

  // Get what the user typed
  const taskText = taskInput.value.trim();

  // If the input is empty, do nothing
  if (taskText === '') return;

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add it to the list
  taskList.appendChild(li);

  // Clear the input box
  taskInput.value = '';
});