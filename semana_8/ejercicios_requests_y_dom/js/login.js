document.addEventListener("DOMContentLoaded", function(){
    const savedUser = localStorage.getItem("usuario");

    if(savedUser){
        window.location.href = "../html/user_data.html"; // cuando ya esta logueado
    }

    document.getElementById("log-in-forms").addEventListener("submit" , async function(event){
        event.preventDefault();

        const userId = document.getElementById("user_id").value.trim();
        const password = document.getElementById("password").value.trim();
        const URL = `https://api.restful-api.dev/objects/${userId}`;

        if(!userId || !password){
            alert("Porfavor ingrese su ID o su contrasena");
            return;
        }

        try{
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error("Usuario no encontrado.");
            }

            const data = await response.json();
            console.log("Datos obtenidos de la API:", data);

            if (data.data && data.data.password) {
                if (data.data.password === password) {
                    alert("Inicio de sesión exitoso");
                    localStorage.setItem("usuario", JSON.stringify(data));
                    window.location.href = "../html/user_data.html";
                } else {
                    alert("Contraseña incorrecta.");
                }
            } else {
                alert("No se encontró la contraseña en la base de datos.");
            }

        }catch (error) {
            console.error("Error en el inicio de sesión:", error);
            alert("Usuario no encontrado o datos incorrectos.");
        }
    });
});
