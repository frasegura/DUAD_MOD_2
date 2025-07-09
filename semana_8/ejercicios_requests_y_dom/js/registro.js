


document.addEventListener("DOMContentLoaded", function() {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
        window.location.href = "../html/user_data.html";
    }
});




document.getElementById("my_forms").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const last_name = document.getElementById("last_name").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value.trim();
    const URL = "https://api.restful-api.dev/objects"

    try{
        const response = await fetch(URL,{
            method: 'POST',
            headers :  { "Content-Type": "application/json" },
            body: JSON.stringify({name, 
                                data : {last_name, 
                                address, 
                                password
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
        window.location.href = "../html/user_data.html";

    }catch(error){
        console.log("Ha ocurrido un error" , error.toString());
    }
})


//ID : ff808181932badb60195fa6efd140a48 , pwd: 1234  -> NUEVA :  456

