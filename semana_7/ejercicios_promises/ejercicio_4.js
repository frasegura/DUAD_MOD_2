/*Repita los ejercicios 1 y 2 de la sección de Async/Await resolviéndolos con las funciones .then(), .catch() y .finally() de ser requerido.*/ 

/**1)Realice un programa que utilice la función fetch para solicitar un usuario del API anterior. El URL debe ser https://reqres.in/api/users/2. 
 * Al finalizar la solicitud, imprima los datos del usuario en pantalla. */


function getUserData(){
    const id = 2;

    console.log("Sending request");
    const user = fetch (`https://reqres.in/api/users/${id}`);


    user.then((response)=> response.json())
        .then((data)=>{
            console.log(`ID: ${data.data.id}`);
            console.log(`email: ${data.data.email}`);
            console.log(`First name: ${data.data.first_name}`);
            console.log(`Last name : ${data.data.last_name}`);


        
        }).catch((error) =>{
        console.log(error);
    }).finally(() =>{
        console.log(' :Data  ');
    })
}

/**2)Realice el mismo ejercicio anterior, pero con el URL https://reqres.in/api/users/23 para generar un error. 
 * Realice el manejo de error adecuado e imprima un mensaje de error indicando que el usuario no se encontró. */

function GetError(){
    const id = 23;

    console.log("Sending request");
    const user = fetch (`https://reqres.in/api/users/${id}`);


    user.then((response)=> response.json())
        .then((data)=>{
            console.log(`ID: ${data.data.id}`);
            console.log(`email: ${data.data.email}`);
            console.log(`First name: ${data.data.first_name}`);
            console.log(`Last name : ${data.data.last_name}`);


        
        }).catch((error) =>{
        console.log(error);
    }).finally(() =>{
        console.log(' D: Error ');
    })
}



getUserData()
GetError()