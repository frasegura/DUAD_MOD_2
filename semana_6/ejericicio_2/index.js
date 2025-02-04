
const setInfo = () =>{
    let textInfo = document.getElementById("input-text").value;
    let infoLabel = document.getElementById("info-label");
    infoLabel.innerHTML = textInfo;
    document.getElementById("input-text").value = "";
}

const button = document.getElementById("input-button");
button.addEventListener("click", setInfo);
