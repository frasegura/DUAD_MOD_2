document.addEventListener("DOMContentLoaded" , async function (){
    const userData = localStorage.getItem("usuario");
    if (!userData) {
        window.location.href = "../html/login.html"; 
        return;
    }

    const user = JSON.parse(userData);
    showProfile(user);

    try{
        const response = await fetch(`https://api.restful-api.dev/objects/${user.id}`);
        if (response.ok) {
            const apiUser = await response.json();
            showProfile(apiUser);
        }
    }catch(error){
        console.log("Error obteniendo los datos del API")
    }

    function showProfile(user) {
        const tableCells = document.querySelectorAll("tbody tr td");
        if (tableCells.length === 4) {
            tableCells[0].textContent = user.id;
            tableCells[1].textContent = user.name;
            tableCells[2].textContent = user.data.last_name;
            tableCells[3].textContent = user.data.address;
        }
    }

    const logoutButton = document.getElementById("logout-btn");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("usuario"); 
            window.location.href = "../html/login.html";
        });
    } else {
        console.error("El botón de cerrar sesión no se encontró en el DOM.");
    }

})