const axios = require('axios');

async function main() {
    let url = 'https://ckx-movies-api.herokuapp.com';
    // to add a thing in the file, we use post
    // let postResponse = await axios.post(url + '/movie/create', {
    //     'title': 'hong keat',
    //     'plot': 'hong keat'
    // })

    //to channge a thing in the file, we use patch
    let edit = await axios.patch(url + '/movie/5fb3f5ee835b7ce1bb05c681', {
        'title': 'hong',
        'plot': 'keat'
    })

    //to get the full list of the file, we use get
    let response = await axios.get(url + '/movies');

    //to delete
    async function deleteMovie() {
        let deleteMovie = await axios.delete(url + '/movie/5fb3f5ee835b7ce1bb05c681');
    });

    console.log(response.data);

}
main();



// async function postMovies() {
//     let url = 'https://ckx-movies-api.herokuapp.com';
//     let postResponse = await axios.post(url + '/movie/create', {
//         'title': 'pirates of the carribean',
//         'plot': 'drunk pirate in the carribean'
//     })
//     console.log(response.data);
// }

