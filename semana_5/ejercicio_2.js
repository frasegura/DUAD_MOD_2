/*2. Realiza un programa que recorra una lista de números y almacene todos los pares en otra lista.
Para este ejercicio intenta hacer una solución con un `for` y otra utilizando la función `filter` */

/* using the function FILTER */
const myArray = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = myArray.filter(num => num%2 == 0);
console.log(evenNumbers);

/**---------function to get the even numbers--------- */

function getEvenNumbers(testArray){
    let newArray = []
    for(let n=0;n < testArray.length ; n++){
        if(testArray[n]%2 == 0){
            newArray.push(testArray[n])
        }
    }
    return newArray
}

const myArray_for = [1,2,3,4,5,6,7,8,9,10];
const evenArray = getEvenNumbers(myArray_for);
console.log(evenArray);

