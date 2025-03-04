button = document.getElementById("button");
input = document.getElementById("input");


async function getUserData(){
    console.log("Getting Data");
    const route = input.value;
    try{

        const response = await fetch(route);
        const data = await response.json();

        console.log(`ID: ${data.data.id}`);
        console.log(`email: ${data.data.email}`);
        console.log(`First name: ${data.data.first_name}`);
        console.log(`Last name : ${data.data.last_name}`);

    }catch(error){
        console.log(`An error has ocurred`);
    }
}


button.addEventListener("click" , getUserData);