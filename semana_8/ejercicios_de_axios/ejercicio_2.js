/**Cree una función que tome por parámetro nombre, correo, contraseña y dirección, 
 * y cree un usuario con el endpoint POST de la documentación brindada. */
import axios from 'axios'; 

async function createUser(nombre, correo, contrasena ,direccion){
    try{

        const user = {
            name : nombre,
        data:{
            correo : correo,
            contrasena : contrasena,
            direccion : direccion
            } 
        };

        const response = await axios.post('https://api.restful-api.dev/objects', user);
        console.log("Usuario creado" , response.data);
        //console.log("Respuesta del servidor:", response.data);

    }catch(error){
        console.log("Error al enviar el usuario");
    }
}


createUser('Francisco','francisco@gmail.com','1234','Coronado');