//Cree una función que reciba tres parámetros: un número y dos funciones de callback.
/*
    Si el número es par, se debe ejecutar el primer callback ->Este debe mostrar “The number is even!”.
    Si el número es impar, se debe ejecutar el segundo -> ste debe mostrar “The number is odd!”
*/


const evenNumber = () =>console.log("The number is even!");

const oddNumber = () =>console.log("The number is odd!");

function  numberFunction(myNumber,evenNumber,oddNumber ){
    if(myNumber%2 === 0){
        evenNumber();
    }else{
        oddNumber();
    }
}

//console.log("Please enter a number :");
let number = 22;
numberFunction(number,evenNumber,oddNumber);

