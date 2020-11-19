const axios = require('axios');

async function main() {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
    console.log(response.data);
}

main();