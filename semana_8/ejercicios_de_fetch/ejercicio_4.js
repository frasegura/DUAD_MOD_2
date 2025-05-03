/**Cree una función que actualice la dirección de un usuario, tomando como parámetros su ID y la nueva dirección. */

const updateUserDirection = async(idUser ,newDirection) => {
    const URL = `https://api.restful-api.dev/objects/${idUser}`;

    const data = {
        data : {Direction : newDirection}
    };

    try{
        const response = await fetch(URL,{
            method : "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        });

        if(!response.ok){
            console.log("Usuario no encontrado");

        }

    }catch(error){
        console.log(error);
    }

};

const idUser = 145;
const newDirection = 'Cartago';
await updateUserDirection(idUser ,newDirection);