let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('t');
let addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;
        taskListItem.classList.add('task');
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
});