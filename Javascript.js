<!DOCTYPE html>
<html>
<head>
  <title>Advanced To-Do App</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    input, button { padding: 8px; margin-top: 10px; }
    li { margin: 5px 0; }
    .delete { margin-left: 10px; color: red; cursor: pointer; }
  </style>
</head>
<body>

  <h2>📝 To-Do List</h2>
  <input id="taskInput" type="text" placeholder="Enter a task" />
  <button onclick="addTask()">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    function addTask() {
      const task = taskInput.value.trim();
      if (task !== '') {
        tasks.push(task);
        updateTasks();
        taskInput.value = '';
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      updateTasks();
    }

    function updateTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      });
    }
  </script>

</body>
</html>
