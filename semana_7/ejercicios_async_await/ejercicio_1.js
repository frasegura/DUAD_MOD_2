/*Para esta sección, vamos a utilizar el API de prueba https://reqres.in/*/ 

/*Realice un programa que utilice la función fetch para solicitar un usuario del API anterior. 
El URL debe ser https://reqres.in/api/users/2. 
// Al finalizar la solicitud, 
// imprima los datos del usuario en pantalla.*/ 

async function getUserData(){
    console.log('1.Enviando request');

    try{
        const response = await fetch(" https://reqres.in/api/users/2");
        const data = await response.json();

        console.log(`ID: ${data.data.id}`);
        console.log(`email: ${data.data.email}`);
        console.log(`First name: ${data.data.first_name}`);
        console.log(`Last name : ${data.data.last_name}`);

    }catch(error){
        console.log(`An error has ocurred :  ${error}`);
    }finally{
        console.log('Fin---')
    }

}
getUserData();



// const response = await fetch("https://reqres.in/api/users/2");
// const data = await response.json();
// console.log(data); 