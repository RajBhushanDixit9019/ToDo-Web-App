// Retrieve elements from the DOM
const listContainer = document.getElementById('list-container');
const newListInput = document.getElementById('new-list-input');
const addListBtn = document.getElementById('add-list-btn');
const listName = document.getElementById('list-name');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const errorMessage = document.getElementById('error-message');



// Data structure to store lists and tasks
let listsData = [];

// Function to initialize the app with a default list "My Day"
function initializeApp() {
    const defaultList = {
        name: "My Day",
        tasks: []
    };
    listsData.push(defaultList);
    renderLists();
    setSelectedListIndex(0);
}

// Event listeners for adding lists and tasks
addListBtn.addEventListener('click', addList);
addTaskBtn.addEventListener('click', addTask);
newListInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        addList();
    }
});
newTaskInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
listContainer.addEventListener('click', selectList);

// Function to add a new list
function addList() {
    const listNameValue = newListInput.value.trim();

    if (listNameValue) {
        const newList = {
            name: listNameValue,
            tasks: []
        };
        listsData.push(newList);
        renderLists();
        newListInput.value = '';
    }
}

// Function to render the list items in the sidebar
function renderLists() {
    listContainer.innerHTML = '';

    listsData.forEach((list, index) => {
        const newList = document.createElement('li');
        newList.textContent = list.name;
        newList.dataset.index = index;
        newList.classList.toggle('active', index === selectedListIndex());
        listContainer.appendChild(newList);
    });

    renderTasks();
}

// Function to handle list selection
function selectList(event) {
    if (event.target.tagName === 'LI') {
        const listIndex = parseInt(event.target.dataset.index);
        setSelectedListIndex(listIndex);
        renderLists();
    }
}

// Function to get the index of the selected list
function selectedListIndex() {
    const index = parseInt(localStorage.getItem('selectedListIndex'));
    if (isNaN(index) || index >= listsData.length) {
        setSelectedListIndex(0);
        return 0;
    }
    return index;
}

// Function to set the index of the selected list
function setSelectedListIndex(index) {
    localStorage.setItem('selectedListIndex', index);
}

// Function to add a new task
function addTask() {
    const taskName = newTaskInput.value.trim();

    if (taskName) {
        const index = selectedListIndex();
        if (index >= 0) {
            const selectedList = listsData[index];
            selectedList.tasks.push({ name: taskName });
            renderTasks();
            newTaskInput.value = '';
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = 'Please select a list first.';
        }
    }
}


// Function to render the tasks in the main area
function renderTasks() {
    const index = selectedListIndex();
    const selectedList = listsData[index];
    listName.textContent = selectedList ? selectedList.name : '';
    const todoScroll = document.querySelector('.todo-scroll');
    const doneScroll = document.querySelector('.done-scroll');
    
    todoScroll.innerHTML = ''; // Clear previous tasks in todo section
    doneScroll.innerHTML = ''; // Clear previous tasks in done section

    if (selectedList) {
        selectedList.tasks.forEach((task, index) => {
            const newTask = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.done;
            checkbox.addEventListener('change', () => toggleTaskStatus(index));
            
            if (task.done) {
                newTask.style.textDecoration = 'line-through';
                doneScroll.appendChild(newTask); // Move task to done section
            } else {
                todoScroll.appendChild(newTask); // Move task to todo section
            }

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(task.name));
            newTask.appendChild(label);
        });
    }
}
// Function to toggle the status of a task (todo/done)
function toggleTaskStatus(taskIndex) {
    const index = selectedListIndex();
    if (index >= 0) {
        const selectedList = listsData[index];
        const task = selectedList.tasks[taskIndex];
        task.done = !task.done;

        renderTasks();
    }
}

// ...

// Initial rendering of lists and tasks
initializeApp();
