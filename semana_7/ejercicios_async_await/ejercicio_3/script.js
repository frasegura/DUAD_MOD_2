

button = document.getElementById("button");
input = document.getElementById("input");


async function getUserData(){

    console.log("Getting Data");

    const userId = input.value;
    if (!userId) {
        console.log("Please enter a valid user ID.");
        return; 
    }
    
    try{
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const data = await response.json();

        console.log(`ID: ${data.data.id}`);
        console.log(`email: ${data.data.email}`);
        console.log(`First name: ${data.data.first_name}`);
        console.log(`Last name : ${data.data.last_name}`);

    }catch(error){
        console.log(`An error has ocurred : ${error}`);
    }
}

button.addEventListener("click" , getUserData);
