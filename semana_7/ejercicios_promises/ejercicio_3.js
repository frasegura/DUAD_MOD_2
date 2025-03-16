/**Cree cuatro promesas, donde cada una resuelve a una de las palabras de la lista ["very", "dogs", "cute", "are"] respectivamente, 
 * en el mismo orden. Utilice la combinación de la función setTimeout y Promise.all() para obtener la salida "Dogs are very cute" , 
 * sin modificar el orden de la lista manualmente o mediante un sort.*/

const myList = ["very", "dogs", "cute", "are"];

const promises = [
    new Promise(resolve => setTimeout(() => resolve(myList[1]), 100)),
    new Promise(resolve => setTimeout(() => resolve(myList[3]), 100)),
    new Promise(resolve => setTimeout(() => resolve(myList[0]), 100)),
    new Promise(resolve => setTimeout(() => resolve(myList[2]), 100)),
]
Promise.all(promises).then((result) =>{
    console.log(result.join(" "));
})
