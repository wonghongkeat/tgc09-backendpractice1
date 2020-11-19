const axios = require('axios');

async function main() {
    let url = 'https://jsonplaceholder.typicode.com';
    let response = await axios.post(url + '/posts', {
        'userId': 404,
        'id': 500,
        'title': "good place to eat",
        'body': 'the famous katong laksa is not at katong'
    })
    console.log(response.data);
}

main();
