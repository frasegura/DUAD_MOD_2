/**Cree una función que retorne un usuario del API, tomando su ID como parámetro. Si no existe el usuario, debe manejar adecuadamente el código 404 retornado, 
 *  y retornar un mensaje de error. */
import axios from 'axios'; 


const getData = async(id) => {
    console.log("Loading Data....");
    const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
    return response.data;
}


var idUsuario = 'ff808181932badb60195c1497e0b1ee4';
const data = await getData(idUsuario);
console.log(data);

// id: 'ff808181932badb60195c1497e0b1ee4'