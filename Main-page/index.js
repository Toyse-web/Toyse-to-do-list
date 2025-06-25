document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#taskInput");
    const addTaskBtn = document.querySelector("#addTaskBtn");
    const taskList = document.querySelector("#taskList");

    // Load task from localStorage (If task is available)


    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    //This clears the tasks and creates an <li> fo each
    //It also adds a checkbox and checked if task is completed
    //Adds a delete button for each task.
    //Updates localStorage whenever a task is marked complete or deleted
    //Re-render the list to reflect changes
    function renderTasks() {
        taskList.innerHTML = ""; //This is to clear the list before re-rendering
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.className = "task-item";
            if (task.completed) {
                taskItem.classList.add("completed"); //To strike through the completed tasks
            }

            taskItem.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>`;

            // To toggle task completion
            const checkbox = taskItem.querySelector("input");
            checkbox.addEventListener("check", () => {
                tasks[index].completed = checkbox.checked;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks(); //Re-render to update the UI
            });

            //To delete tasks
            const deleteBtn = taskItem.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", () => {
                tasks.splice(index, 1); //Remove task from the array
                localStorage.setItem("tasks", JSON.stringify(tasks)), 
                renderTasks(); //Re-render to update the UI
            });
            taskList.appendChild(taskItem);
        });
    }

    // Add new task
    //Gets the input value (tasksInput.value.trim()).
    //Checks if it's not empty (if (taskText)).
    //Also adds the task to the tasks array.
    //Saves to localStorage.
    //Clears the input field and re-render
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) { //Only add task if input is not empty
            tasks.push({
                text: taskText, 
                completed: false
            }); //This add a new task
            localStorage.setItem("tasks", JSON.stringify(tasks)); //Save to localStorage
            taskInput.value = ""; //Clear input field
            renderTasks(); //Update UI
        }
    });

    // The initial render
    renderTasks(); //This will loads tasks when the page first loads
});