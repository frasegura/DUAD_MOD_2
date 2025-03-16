/**Construya un pequeño contenedor con HTML donde haya espacios para un input y un botón. 
 * Al presionar el botón tome el valor ingresado al input y realice la solicitud al endpoint utilizado en los dos ejercicios anteriores.
 *  Si la solicitud fue exitosa, muestre nombre, apellido y correo del usuario.
 * Si la solicitud falló, muestre un mensaje de error en pantalla. */

const button = document.getElementById("button");
const input = document.getElementById("input");
const userInfo = document.getElementById("user-info");
const errorMessage = document.getElementById("error-message");



async function getUserData(){

    console.log("Getting Data");

    const userId = input.value;
    if (!userId) {
        errorMessage.textContent = "Please enter a valid user ID.";
        userInfo.innerHTML = "";
        return;
    }
    
    try{
        const response = await fetch(`https://reqres.in/api/users/${userId}`);

        if(!response.ok){
            throw new Error('User not found');
        }
        const data = await response.json();
        userInfo.innerHTML = ` <p><strong>ID:</strong> ${data.data.id}</p>
                            <p><strong>Email:</strong> ${data.data.email}</p>
                            <p><strong>First Name:</strong> ${data.data.first_name}</p>
                            <p><strong>Last Name:</strong> ${data.data.last_name}</p>`;

        errorMessage.textContent = "";

    }catch(error){
        errorMessage.textContent = `An error has ocurred : ${error}`;
        userInfo.innerHTML = "";
    }
}

button.addEventListener("click" , getUserData);
