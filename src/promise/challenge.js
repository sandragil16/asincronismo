const fetchData = require('../utils/fetchtData')
const API = 'https://rickandmortyapi.com/api/character/'

//traer count para ver los personajes
fetchData(API)
.then(data => {
    console.log(data.info.count)
    return fetchData(`${API}${data.result[0].id}`)
})
.then(data =>{
    console.log(data.origin.url)
})
.then(data =>{
    console.log(data.dimension)
})
.catch(err => console.error(err))
