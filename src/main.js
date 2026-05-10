// main.js — JavaScript will be added in Checkpoint 4
// main.js — Checkpoint 4

// main.js — Checkpoint 5

// main.js — Checkpoint 6

// Step 1 — Grab the elements from the HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Step 2 — Load saved tasks from localStorage when the page opens
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(function (task) {
    const li = createTaskItem(task.text, task.completed);
    taskList.appendChild(li);
  });
}

// Step 3 — Save all current tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(function (li) {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Step 4 — Create one task item
function createTaskItem(taskText, isCompleted) {

  const li = document.createElement('li');
  if (isCompleted) li.classList.add('completed');

  // Wrap the text in a span so we can read it easily later
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
    saveTasks();
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    saveTasks();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}

// Step 5 — Add task when button is clicked
addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = createTaskItem(taskText, false);
  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
});

// Step 6 — Load tasks when the page first opens
loadTasks();