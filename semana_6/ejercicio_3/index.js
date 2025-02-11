

const showEmp = document.getElementById("yes-button");
const noShowEmp = document.getElementById("no-button");
const hideInput = document.getElementById("hidden-input");


const showInput = () =>{;
    if(showEmp.checked){
        hideInput.style.display = 'block';
    }else if (noShowEmp.checked) {
        hideInput.style.display = 'none';
    }
}

showEmp.addEventListener("click", showInput);
noShowEmp.addEventListener("click", showInput);