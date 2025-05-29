// const ul = document.getElementById("myUL");
// const input = document.getElementById("myInput");
// const API_URL = "https://api.restful-api.dev/objects";

//Almacenar tareas
let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn =  document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
//const filterButton = document.querySelectorAll('.filter-button');

// EXPLICAR ESTO
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) taskSpan.classList.add('completed');
        taskSpan.addEventListener('click', () => toggleTask(index));

        const editBtn = document.createElement('button');
        editBtn.textContent = task.completed ? '↩️': '✅';
        editBtn.title = task.completed ? 'Mark as incomplete' : 'Mark as complete';
        editBtn.addEventListener('click', () => toggleTask(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}


//CREATE

function addTask(){
    const text = taskInput.value.trim();
    if(text==="")return;
    tasks.push({ text, completed: false });
    taskInput.value = '';
    renderTasks();
}

//UPDATE --> actualizar estado
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// function editTask(index){
//     tasks[index].completed = true;
//     renderTasks();
// }

//DELETE
function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}

//Funcion para aplicar filtros

function applyFilters(f){
    const filter = f.target.getAttribute('data-filter');
    renderTasks(filter);
}

addTaskBtn.addEventListener('click', addTask);
filterButton.forEach(button => {
    button.addEventListener('click', applyFilters);
});

renderTasks();