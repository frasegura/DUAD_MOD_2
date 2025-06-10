
const usuario = JSON.parse(localStorage.getItem("usuario"));
const nombreUsuario = usuario.name || (usuario.data && usuario.data.name);
const userId = usuario.id || usuario.email || usuario.name;
const nombreElemento = document.getElementById("user-name");
//Almacenar tareas
let tasks = JSON.parse(localStorage.getItem(`tasks_${userId}`)) || [];
const taskInput = document.getElementById('taskInput');
const addTaskBtn =  document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterButton = document.querySelectorAll('.filter-button');

if (!usuario) {
    window.location.href = 'login.html';
}

if (nombreElemento && nombreUsuario) {
    nombreElemento.textContent = `Welcome  ${nombreUsuario}`;
}


function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const row = document.createElement('tr');

        // Columna: Tarea
        const taskCell = document.createElement('td');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) taskSpan.classList.add('completed');
        taskSpan.addEventListener('click', () => toggleTask(index));
        taskCell.appendChild(taskSpan);

        // Columna: Estado
        const statusCell = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = task.completed ? '↩️' : '✅';
        editBtn.title = task.completed ? 'Mark as incomplete' : 'Mark as complete';
        editBtn.addEventListener('click', () => toggleTask(index));
        statusCell.appendChild(editBtn);

        // Columna: Acciones
        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.title = 'Delete task';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        actionCell.appendChild(deleteBtn);

        // Agrega las celdas a la fila
        row.appendChild(taskCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);

        // Agrega la fila a la tabla
        taskList.appendChild(row);
    });
}


//CREATE
function addTask(){
    const text = taskInput.value.trim();
    if(text==="")return;
    tasks.push({ text, completed: false });
    taskInput.value = '';
    localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
    renderTasks();
}

//UPDATE --> actualizar estado
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
    renderTasks();
}

// function editTask(index){
//     tasks[index].completed = true;
//     renderTasks();
// }

//DELETE
function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
    renderTasks();
}

//Funcion para aplicar filtros

function applyFilters(f){
    const filter = f.target.getAttribute('data-filter');

    filterButton.forEach(button =>{
        button.classList.remove('active');
    });

    f.target.classList.add('active');
    renderTasks(filter);
}

//Funcion cerrar sesion:
function cerrarSesion() {
    localStorage.removeItem("usuario");
    sessionStorage.clear();
    window.location.href = 'login.html';
}

addTaskBtn.addEventListener('click', addTask);
filterButton.forEach(button => {
    button.addEventListener('click', applyFilters);
});

renderTasks();