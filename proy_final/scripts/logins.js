document.addEventListener("DOMContentLoaded", function(){
    const savedUser = localStorage.getItem("usuario");

    // if(savedUser){
    //     window.location.href ="../src/toDoList.html"
    // }

    document.getElementById("log-in-forms").addEventListener("submit", async function (event){
        event.preventDefault();

        const user_id = document.getElementById("user_id").value.trim();
        const password = document.getElementById("pass_id").value.trim();

        const URL = `https://api.restful-api.dev/objects/${user_id}`;

        if(!user_id || !password){
            alert("Porfavor ingrese su ID o su contrasena");
            return;
        }

        try{
            const response = await fetch(URL);

            if(!response.ok){
                throw new Error("User not found");
            }
            const data = await response.json();
            console.log("Datos obtenidos de la API:", data);

            if(data.data && data.data.password){
                if(data.data.password === password){
                    alert("Login successful");
                    localStorage.setItem("usuario", JSON.stringify(data));
                    window.location.href = "../src/toDoList.html"
                }else{
                    alert("Incorrect password");
                }

            }else{
                alert("Password not found");
            }

        }catch(error){
            console.error("Login failed :", error);
            alert("User not found or incorrect data");
        }

    });
});




//ff80818196f2a23f019762f91ff77442    pwd: 123
//ff80818196f2a23f019763003ec87456    pwd: 123