document.addEventListener('DOMContentLoaded', function () { 
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.querySelector('.empty-message');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const newTask = document.createElement('li');
        newTask.className = 'task-item';
        newTask.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', function () {
            newTask.remove();
            if (taskList.children.length === 1) {
                emptyMessage.style.display = 'block';
            }
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = '';
        emptyMessage.style.display = 'none';
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
