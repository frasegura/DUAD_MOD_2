

function addItem(){
    const item = document.createElement("li");
    item.innerHTML = 'Another item';
    const list = document.getElementById("list");
    list.appendChild(item);
}

function cleanList(){
    const list = document.getElementById("list")
    list.remove();
}

const button_1 = document.getElementById("add-button");
const button_2 = document.getElementById("clean-button");
button_1.addEventListener("click", addItem); 
button_2.addEventListener("click", cleanList);

