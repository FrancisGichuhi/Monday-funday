let ages = [10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20]

let oldEnough = ages.filter( (age) => {
    return age >= 18

})

console.log(oldEnough);

//map


    let info    = oldEnough.map( (age) => {
        result  = {}
     result.age = age
     result.display = age + '-is old enough to by lotto!'
     return result
    
})

console.log(info)

