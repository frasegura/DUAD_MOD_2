/**Cree una función que tome por parámetro nombre, correo, contraseña y dirección, 
 * y cree un usuario con el endpoint POST de la documentación brindada. */
//(https://api.restful-api.dev/objects)

const createUser = async(name,email,password,location) => {
    const URL = 'https://api.restful-api.dev/objects';
    const data = {
        name : name,
        data:{
            correo : email,
            contrasena : password,
            direccion : location
        }
    };

    const response = await fetch(URL,{
        method : "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        const result = await response.json();
        console.log('El usuario :', result , 'fue agregado correctamente');
    }else{
        const error = await response.text();
        console.log('Error al registrar usuario : ' , error);
    }
};



await createUser('Francisco','francisco@gmail.com','1234','Coronado');