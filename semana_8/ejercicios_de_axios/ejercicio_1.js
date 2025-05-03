/**1. Cree una función que liste todos los elementos retornados de un GET al endpoint [`https://api.restful-api.dev/objects`](https://api.restful-api.dev/objects). 
 * Filtre todos los resultados que no retornen `data` , y los formatee los que sí lo tienen de forma legible para mostrarlos en pantalla.
    1. Google Pixel 6 Pro (color: Cloudy White, capacity: 128GB)
    Apple iPhone 12 Pro Max (color: Cloudy White, capacity GB: 512)
    Apple iPhone 11, 64GB (price: 389.99, color: Purple) */

//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
import axios from 'axios'; 

const getApiInfo = async () =>{
    console.log("Loading data ...");
    const response = await axios.get('https://api.restful-api.dev/objects');
    console.log("Data Loaded Returning ...");
    
    const object = response.data;

    object.forEach(obj =>{
        const data = obj.data;
        
        if(data){
            const name = obj.name || "Unknown Product"; 
            const attributes = Object.entries(data)
                .map(([key, value]) => `${key}: ${value}`);           
            console.log(`${name} (${attributes.join(", ")})`);
        }                   
    });

}


await getApiInfo();
