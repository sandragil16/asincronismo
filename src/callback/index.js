function sum(num1, num2) { // tenemos 1 func y le pasaremos otra 
    return num1 + num2
}

//funcion que recibe como argumento 

function calc(num1, num2,callback) {
    return callback(num1, num2)

}  
console.log(calc(2,2, sum))

//trabajar con tiempos como vamos a esperar que sucedan
function date(callback){
    console.log(new Date)
    setTimeout(function() {
      let date = new Date
    }, 3000)
}
 function printDate (dateNow) {
     console.log(dateNow)
 }
 date(printDate)

