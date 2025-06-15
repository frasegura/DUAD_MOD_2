
const usuario = JSON.parse(localStorage.getItem("usuario"));
const nombreUsuario = usuario.name || (usuario.data && usuario.data.name);
const taskId = usuario.data?.taskId;
const nombreElemento = document.getElementById("user-name");
//Almacenar tareas
const taskInput = document.getElementById('taskInput');
const addTaskBtn =  document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterButton = document.querySelectorAll('.filter-button');
const URL = "https://api.restful-api.dev/objects";

let tasks=[];

//Validaciones:

if(!usuario){
    window.location.href = 'login.html';
}

if (!taskId) {
    alert("Your task list was not found. Please login again.");
    localStorage.removeItem("usuario");
    window.location.href = "login.html";
}

if (nombreElemento && nombreUsuario) {
    nombreElemento.textContent = `Welcome  ${nombreUsuario}`;
}

//CARGAR DESDE EL API
async function loadTasks() {
    try{
        const response = await fetch(`${URL}/${taskId}`);
        if(!response.ok) throw new Error("Error loading your tasks list");
        const data = await response.json();
        tasks = data.data.tasks || [];
        renderTasks();
    } catch(error){
        console.log("Error loading tasks...", error)
    }
}

// Guardar tareas en la API
async function saveTasks() {
    try {
        await fetch(`${URL}/${taskId}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: `tasks_${nombreUsuario}`,
                data: { tasks }
            })
        });
    } catch (error) {
        console.error("Error al guardar tareas:", error);
    }
}

function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    //1)Tareas vacias sin filtro:
    const emptyRow = document.createElement('tr');
    const emptyCell = document.createElement('td');
    if (tasks.length === 0) {
        emptyCell.textContent = "No tasks added";
        emptyCell.colSpan = 3;
        emptyCell.style.textAlign = "center";
        emptyRow.appendChild(emptyCell);
        taskList.appendChild(emptyRow);
        return;
    }
    //----

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    });

    //2)Tareas vacias con filtros:
    if(filteredTasks.length ===0){
        emptyCell.textContent = "No filtered tasks";
        emptyCell.colSpan = 3;
        emptyCell.style.textAlign = "center";
        emptyRow.appendChild(emptyCell);
        taskList.appendChild(emptyRow);
        return;
    }

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
async function addTask(){
    const text = taskInput.value.trim();
    if(text==="")return;
    tasks.push({ text, completed: false });

    taskInput.value = '';
    await saveTasks();
    renderTasks();
}

//UPDATE --> actualizar estado
async function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    await saveTasks();
    renderTasks();
}

//DELETE
async function deleteTask(index){
    tasks.splice(index,1);
    await saveTasks();
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

loadTasks();