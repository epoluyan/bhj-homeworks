let taskInput = document.querySelector('.tasks__input');
let tasksList = document.querySelector('.tasks__list');
let addButton = document.querySelector('.tasks__add');
let tasksControl = document.querySelector('.tasks__control');
let addTask = function () {
    if (taskInput.value.trim()) {
        let task = document.createElement('div');
        task.innerHTML = '<div class=\"task__title\"> </div> <a href=\"#\" class=\"task__remove\">&times;</a>';
        task.classList.add('task');
        let taskTitle = task.querySelector('.task__title');
        taskTitle.innerText = taskInput.value;
        tasksList.appendChild(task);
        taskInput.value = '';
        task.querySelector('.task__remove').onclick = () => {
            task.remove();
        }
    }
    event.preventDefault();
}

tasksControl.addEventListener('submit', addTask);