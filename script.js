// Get elements
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');

// Add task function
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}

// Remove task function
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

// Clear completed tasks function
function clearTasks() {
    const completedTasks = document.querySelectorAll('li');

    completedTasks.forEach(task => {
        if (task.classList.contains('completed')) {
            taskList.removeChild(task);
        }
    });
}
