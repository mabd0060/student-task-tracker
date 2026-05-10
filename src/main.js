// main.js — JavaScript will be added in Checkpoint 4
// main.js — Checkpoint 4

// main.js — Checkpoint 5

// main.js — Checkpoint 6

// main.js — Student Task Tracker
// Handles adding, completing, deleting, and saving tasks

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load saved tasks when the page opens
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(function (task) {
    taskList.appendChild(createTaskItem(task.text, task.completed));
  });
}

// Save all tasks to localStorage
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

// Build a single task list item with Complete and Delete buttons
function createTaskItem(taskText, isCompleted) {
  const li = document.createElement('li');
  if (isCompleted) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
    saveTasks();
  });

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

// Add a new task when the button is clicked
addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  taskList.appendChild(createTaskItem(taskText, false));
  saveTasks();
  taskInput.value = '';
});

// Also add task on Enter key
taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTaskBtn.click();
});

loadTasks();