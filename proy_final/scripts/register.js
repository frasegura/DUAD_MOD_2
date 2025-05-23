
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

        const data = await response.json();

        alert(`El usuario ${data.name} fue agregado correctamente, su ID es: ${data.id}`);
        localStorage.setItem("usuario", JSON.stringify(data));
        window.location.href = "../src/login.html";

    }catch(error){
        console.log("Ha ocurrido un error" , error.toString());
    }
})
