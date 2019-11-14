

var topLevel = 1;

console.group('doing the loop')
for (let i = 0; i < 3; i = i + 1) {
    let topLevel = 5;
    console.log('topLevel:' + topLevel)
    console.log(i)

}
console.groupEnd()

console.log('topLevel after:' + topLevel)