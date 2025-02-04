function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create main task item
    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text" onclick="toggleTaskCompletion(this)">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
        <button class="add-subtask-btn" onclick="addSubTask(this)">Add Sub-Task</button>
        <ul class="subtask-list"></ul>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}

function addSubTask(button) {
    let subTaskText = prompt("Enter your sub-task:");

    if (!subTaskText || subTaskText.trim() === "") {
        alert("Sub-task cannot be empty!");
        return;
    }

    let parentTask = button.parentElement;
    let subTaskList = parentTask.querySelector(".subtask-list");

    let subLi = document.createElement("li");
    subLi.innerHTML = `
        <span class="task-text" onclick="toggleTaskCompletion(this)">${subTaskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    subTaskList.appendChild(subLi);
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}

// Toggle task completion by adding/removing "completed" class
function toggleTaskCompletion(task) {
    task.classList.toggle("completed");
}
