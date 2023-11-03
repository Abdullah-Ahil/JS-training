var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log('Ages : ',ages)
var sortedAges =ages.sort();
console.log('sorted ages : ',sortedAges)
// console.log(...sortedAges)
let minAge = Math.min(...sortedAges)
let maxAge = Math.max(...sortedAges)

console.log('Minimum Age:',minAge)
console.log('Maximum Age:',maxAge)
var median = sortedAges[(sortedAges.length)/2]
console.log('Median Age:',median)
// Input array
// let Arr = [50, 60, 20, 10, 40];

// // Getting min value
// let minValue = Arr.reduce((acc, current) => Math.min(acc, current));

// // Getting max value
// let maxValue = Arr.reduce((acc, current) => Math.max(acc, current));

// // Display output
// console.log("Minimum element is:" + minValue);
// console.log("Minimum element is:" + maxValue);

var sum =0 ;
for(let i = 0;i<ages.length;i++){
    sum += ages[i] ;
}
var avg = sum/ages.length;
console.log("Average Age:",Math.round(avg))
var range = maxAge - minAge;
console.log("Range:",range)

console.log('Min-Avg',Math.abs(minAge - avg))
console.log('Max-Avg',Math.abs(maxAge - avg))

console.log()

var arr3 = [];
function genArray(array){
    for(let i=0;i<array.length;i++){
        if(array[i].length>3){
            arr3.push(array[i]);
        }
    }
    // arr3 = array.map(item =>
    //     item.length>3 )
console.log('generated array:',arr3)
    
}
genArray(['hello','hi'])
genArray(['FAIZAN','Asim','Abrar','Aliyan','Ali'])

var cart = ['mobile','laptop','shoe','shirt'];
console.log('Cart contains:',cart)
var updatedArray = []
function shoppingCart(item){
    for(let i =0 ;i<cart.length;i++){
        if(item == cart[i]){
            continue
        }
        updatedArray.push(cart[i])
    }
   
    
}

shoppingCart('laptop')
console.log('updated cart:',updatedArray)

// shoppingCart('laptop')
// console.log('updated cart:',updatedArray)
