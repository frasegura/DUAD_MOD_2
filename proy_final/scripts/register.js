
document.getElementById("registro-form").addEventListener("submit" , async function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const last_name = document.getElementById("last_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone_number = document.getElementById("phone_number").value.trim();
    const date = document.getElementById("date").value.trim();
    const URL = "https://api.restful-api.dev/objects";

    try{

    //     console.log("Datos a enviar:", {
    //     name,
    //     data: {
    //         last_name,
    //         email,
    //         password,
    //         phone_number,
    //         date
    //     }
    // });



        const response = await fetch(URL,{
            method: 'POST',
            headers :  { "Content-Type": "application/json" },
            body: JSON.stringify({name, 
                                data : {last_name, 
                                email, 
                                password,
                                phone_number,
                                date
                                    }
                                })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al registrar usuario: ${errorText}`);
        }

        const userData = await response.json();

        const taskResponse = await fetch(URL,{
            method: 'POST',
            headers:{"Content-Type" : "application/json" },
            body: JSON.stringify({
                name:`tasks_${name}`,
                data:{
                    tasks:[]
                }
            })
        });
        if(!taskResponse.ok){
            const errorText = await taskResponse.text();
            throw new Error( `${errorText}`);
        }

        const taskData = await taskResponse.json();
        const taskId = taskData.id;

        const updateUser = await fetch(`${URL}/${userData.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                data: {
                    ...userData.data,
                    taskId: taskId 
                }
            })
        });

        if (!updateUser.ok) {
            const errorText = await updateUser.text();
            throw new Error(`Error al asociar tareas al usuario: ${errorText}`);
        }

        const updatedUser = await updateUser.json();
        console.log("updatedUser:", updatedUser); 
        localStorage.setItem("usuario", JSON.stringify(updatedUser));

        alert(`El usuario ${updatedUser.name} fue agregado correctamente, su ID es: ${updatedUser.id}`);
        window.location.href = "../src/login.html";

    }catch(error){
        console.log("Ha ocurrido un error" , error.toString());
    }
})
