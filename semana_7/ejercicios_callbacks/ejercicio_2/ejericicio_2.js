/**2. Cree dos archivos de texto con el siguiente contenido.
    Lea ambos archivos y compare cuales palabras se repiten en ambos. Muestre el mensaje escondido al final del programa. 
    ->Funcion para leer el archivo
    ->Funcion para comparar las palabras
    ->Funcion que llame a las funciones anteriores
    */

const fs = require('fs');
const path = require('path');

const firstFilePath = path.join(__dirname, 'first_file.txt');
const secondFilePath = path.join(__dirname, 'second_file.txt');

function getInfo(filepath, callback){
    fs.readFile(filepath, 'utf8' ,(err,data)=>{
        if(err){
            console.log("Ha ocurrido un error al leer el archivo", err);
            return callback(err, null);
        }

        const words = data.toLowerCase().match(/\b\w+\b/g) || [];  //Preguntar
        callback(null, words);
    });
}


function compareFiles(firstArray,secondArray){
    const firstSetOfWords = new Set(firstArray);
    const secSetOfWords = new Set(secondArray); 

    const repeatedWords = [...firstSetOfWords].filter(word => secSetOfWords.has(word));
    return repeatedWords;
}

getInfo(firstFilePath, (err, firstWords) => {
    if (err) return;

    getInfo(secondFilePath, (err, secondWords) => {
        if (err) return;

        const commonWords = compareFiles(firstWords, secondWords);
        console.log("Palabras repetidas:", commonWords.join(', '));

    });
});








