// main.js — JavaScript will be added in Checkpoint 4
// main.js — Checkpoint 4

// main.js — Checkpoint 5

// Step 1 — Grab the elements from the HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Step 2 — This function creates one task item
function createTaskItem(taskText) {

  // Create the list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create the Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Create the Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  // Add both buttons to the list item
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}

// Step 3 — When Add Task is clicked, use the function above
addTaskBtn.addEventListener('click', function () {

  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = createTaskItem(taskText);
  taskList.appendChild(li);

  taskInput.value = '';
});