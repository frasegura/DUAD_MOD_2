

function addItem(){
    let list = document.getElementById("list");
    if(!list){
        list = document.createElement("ul");
        list.id = "list";
        container = document.getElementById("container");
        container.appendChild(list);
        const item = createFirstItemList();
        list.appendChild(item);

        
    }else{
        const item = document.createElement("li");
        item.innerHTML = "Another item";
        list.appendChild(item);
    }

}

function cleanList(){
    const list = document.getElementById("list");
    if(list){
        list.remove();
    }
}

function createFirstItemList(){
    const item = document.createElement("li");
    item.innerHTML = "An item";
    return item;
}

const button_1 = document.getElementById("add-button");
const button_2 = document.getElementById("clean-button");
button_1.addEventListener("click", addItem); 
button_2.addEventListener("click", cleanList);

