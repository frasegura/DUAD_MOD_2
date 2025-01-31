/**4.Toma un string y conviertelo en una lista de palabras, separandolas por espacios en blanco. No puedes usar la función split. */

function getStringList(oneString){
    const myList = [];
    let myWord = "";
    for(let i=0;i<oneString.length;i++){
        if(oneString[i] === " "){
            myList.push(myWord);
            myWord=" ";
        }else{
            myWord+=oneString[i];
        }
    }
    if(myWord){
        myList.push(myWord);
    }
    return myList;
}

const myString = "This is a string!";
const myList = getStringList(myString);
console.log(myList);