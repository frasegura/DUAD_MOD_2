document.getElementById("change-password-form").addEventListener("submit", async function(event){
    event.preventDefault();

    const userId = document.getElementById("user_id").value.trim();
    const oldPwd = document.getElementById("old_pwd").value.trim();
    const newPwd = document.getElementById("new_pwd").value.trim();
    const confPwd = document.getElementById("confirm_pwd").value.trim();
    const URL = `https://api.restful-api.dev/objects/${userId}`;

    if(!userId || !oldPwd || !newPwd || !confPwd){
        alert("Todos los campos son obligatorios");
        return;
    }

    if(newPwd !== confPwd){
        alert("Los contrasenas no coinciden.");
        return;
    }

    try{

        const response = await fetch(URL);
        if (!response.ok) {
            alert("Usuario no encontrado.");
            return;
        }

        const userInfo = await response.json();

        if (!userInfo.data || userInfo.data.password !== oldPwd) {
            alert("La contraseña actual es incorrecta.");
            return;
        }


        const updateResponse = await fetch(URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: userInfo.name, // ✅ Mantener el nombre
                data: {
                    last_name: userInfo.data.last_name,
                    address: userInfo.data.address, 
                    password: newPwd 
                }
            })
        });


        
        if(!updateResponse.ok){
            alert("Ha ocurrido un error al actualizar la contrasena");
            return;
        }

        alert("Contrasena actualizada correctamente");
        window.location.href = "../html/login.html"; 

    }catch{
        alert("Problema al actualizar contrasena");
    }
})