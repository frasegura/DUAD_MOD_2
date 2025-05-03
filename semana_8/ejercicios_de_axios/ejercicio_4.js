/**Cree una función que actualice la dirección de un usuario, tomando como parámetros su ID y la nueva dirección. */

import axios from "axios";

const updateInfoUser = async(id, newAddress) => {

    try{
        
        const response = await axios.put(
            `https://api.restful-api.dev/objects/${id}`,
            { 
                data: { direccion: newAddress } // La dirección debe estar dentro de `data`
            });
            
        console.log('Direccion ' , response.data);
        return response.data;
    }catch(error){
        console.log(error.response);
    }
}

var userId ='ff808181932badb60195c1497e0b1ee4';
updateInfoUser(userId, 'Heredia');

// id: 'ff808181932badb60195c13618981edb'

