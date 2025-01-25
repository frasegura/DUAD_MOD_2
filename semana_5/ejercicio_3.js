/**3. Toma una lista de temperaturas en grados celsius y conviertala a farenheit utilizando la función map */

const arrayCelsius = [1, 2, 3, 4]; 
const convertedArray = arrayCelsius.map((temperature) => {
    return temperature * (9/5) + 32;
})
console.log(convertedArray);