/**1. Cree una función que liste todos los elementos retornados de un GET al endpoint (https://api.restful-api.dev/objects).
 *  Filtre todos los resultados que no retornen `data` , y los formatee los que sí lo tienen de forma legible para mostrarlos en pantalla.
    1. Google Pixel 6 Pro (color: Cloudy White, capacity: 128GB)
    Apple iPhone 12 Pro Max (color: Cloudy White, capacity GB: 512)
    Apple iPhone 11, 64GB (price: 389.99, color: Purple) */

const getApiInfo = async() => {
    console.log("Requesting data...");
    const response = await fetch('https://api.restful-api.dev/objects');
    console.log("Data retrieved");


    const object = await response.json();

    object.forEach(obj =>{
        const data = obj.data;
        
        if(data){
            const name = obj.name || "Unknown Product"; 
            const attributes = Object.entries(data)
                .map(([key, value]) => `${key}: ${value}`);           
            console.log(`${name} (${attributes.join(", ")})`);
        }                   
    });
};

await getApiInfo();