const axios = require('axios');


async function main() {
    console.log('hello world');
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    console.log(response.data);
}

main()