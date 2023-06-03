document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', function() {
      const task = todoInput.value.trim();
  
      if (task !== '') {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
  
        const taskElement = document.createElement('span');
        taskElement.className = 'task';
        taskElement.textContent = task;
  
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
  
        todoItem.appendChild(checkbox);
        todoItem.appendChild(taskElement);
        todoItem.appendChild(deleteButton);
  
        todoList.appendChild(todoItem);
  
        todoInput.value = '';
      }
    });
  
    todoList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-button')) {
        const todoItem = event.target.closest('.todo-item');
        todoItem.remove();
      }
    });
  });
  