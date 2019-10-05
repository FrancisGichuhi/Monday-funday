let ages = [10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20]

// provide the ages as objects and include the message such as 
// '18 is old enough to buy lottery'

// filter

// map

// console.log the array of objects


let oldEnough = ages.filter( (age) => {
    return age >= 18

})

console.log(oldEnough);

//map



let info = oldEnough.map( (age) => {
    let result = {}
    result.age = age
    result.display = '-is old enough to Gamble!!'
    return result
})

console.log(info)

