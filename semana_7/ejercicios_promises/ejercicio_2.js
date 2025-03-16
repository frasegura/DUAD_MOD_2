/*Realice el mismo ejercicio anterior utilizando la función Promse.any() para mostrar el nombre del primer 
pokemón que esté contenido en la primera promesa que se resuelva.*/

const pokemonId = [1,4,5];
const req1 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[0]}`).then(response => response.json());
const req2 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[1]}`).then(response => response.json());
const req3 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[2]}`).then(response => response.json());

const promises = [req1,req2,req3];

Promise.any(promises).then((results)=>{
    console.log(results.name);


}).catch((error)=>{
    console.log(`An error has ocurred : ${error}`);
}).finally(() =>{
    console.log("Promise ended")
})