const somethingWillHappen = new Promise( (resolve, reject) => {
        if (true) {
            console.log('Heeey!' )
            resolve('Hey!')
        } else {
            reject ('Whoooops')
        }
    })
somethingWillHappen().then(
    response => console.log(response)
).catch(
    err => console.log(err)
)

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True ')
            }, 2000)
        }else {
            const error = new Error (' Whooop!')
            reject (error)
        }
    })  
}
somethingWillHappen2()
.then(response => console.log(response))
.catch (err => console.error(err))


//ejecutar 2 promesas y retornar un arreglo con los resultados
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log ('Array of results', response)
})
.catch(err => {
    console.error(err)
})
ARREGLAR