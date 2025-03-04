/*Utilice el API https://pokeapi.co/api/v2/pokemon/:ID para solicitar 3 distintos pokemónes. 
// Utilice la función Promise.all() para mostrar en pantalla el nombre de los tres pokemónes al mismo tiempo, 
hasta que todas las promesas se resuelvan. */

const pokemonId = [1, 4, 7];
console.log("1.Sending request");
const req1 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[0]}`).then(response => response.json());
const req2 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[1]}`).then(response => response.json());
const req3 = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId[2]}`).then(response => response.json());


Promise.all([req1,req2,req3]).then((results)=>{
    console.log(results[0].name);
    console.log(results[1].name);
    console.log(results[2].name);

}).catch((error)=>{
    console.log(`An error has ocurred : ${error}`);
}).finally(() =>{
    console.log("Promise ended")
})

