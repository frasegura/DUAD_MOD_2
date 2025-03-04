/*Realice el mismo ejercicio anterior, pero con el URL https://reqres.in/api/users/23 para generar un error. 
// Realice el manejo de error adecuado e imprima un mensaje de error indicando que el usuario no se encontró.*/

async function getUserData(){
    console.log("Enviando request");
    try{
        const response = await fetch(`https://reqres.in/api/users/23`);
        const data = await response.json();

        console.log(`ID: ${data.data.id}`);
        console.log(`email: ${data.data.email}`);
        console.log(`First name: ${data.data.first_name}`);
        console.log(`Last name : ${data.data.last_name}`);



    }catch(error){
        console.log(`An error has ocurred : ${error}`);
    }finally{
        console.log("Fin---")
    }

}

getUserData();