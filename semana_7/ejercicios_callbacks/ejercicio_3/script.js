/**Cree una pequeña página web con un botón y un <p> donde al presionar el botón, cambia el color del fondo del <p> por uno aleatorio de la siguiente lista [red, blue, green, yellow, cyan, pink]. Para el texto puede utilzar un Lorem Ipsum corto, 
 * solamente para rellenar el espacio. La acción del botón debe agregarla con un listener */

//Definir las contantes
//Crear la funcion que cambie los colores
//LLamar la funcion

const colors = ["red", "blue", "green", "yellow", "cyan", "pink"];
const text = document.getElementById("text");
const button = document.getElementById("color-button");

function changeColor(){
    const  randomColor = colors[Math.floor(Math.random()* colors.length)];
    text.style.backgroundColor = randomColor;
}

button.addEventListener("click", changeColor)



