/**Cree una función que retorne un usuario del API, tomando su ID como parámetro. 
 * Si no existe el usuario, debe manejar adecuadamente el código 404 retornado, y retornar un mensaje de error. */


const  getUserFromApi = async(id) =>{
    const URL = `https://api.restful-api.dev/objects/${id}`;

    try{
        const repsonse = await fetch(URL);

        if(!repsonse.ok){
            if(repsonse.status == 404){
                console.log('Se ha producido el error 404');
            }
        }
        return await repsonse.json();
    }catch(error){
        console.log(error);
    }
};

const userId = 45;
const user = await getUserFromApi(userId);
console.log(user.name);
console.log(user.data);