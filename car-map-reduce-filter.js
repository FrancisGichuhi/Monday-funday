
var cars = [{

    make: 'chevy',
    model: 'volt',
    year: 2012

},   {
    make: 'tesla',
    model: '3',
    year: 2017

},   {
    make: 'nissan',
    model: 'leaf',
    year: 2012
    
}, { 
    make: 'bmw',
    model: 'x6',
    year: 2019

}]

let year = cars.filter( (car) => {
    return car.year === 2019
})

console.log( year )