let i;
var evenArray = []
for(i=0;i<101;i++){
    if(i%2 == 0){
        evenArray.push(i) 
        
    }
}
console.log("Even numbers:",evenArray)

var oddArray = []
for(i=0;i<101;i++){
    if(i%2 != 0){
        oddArray.push(i) 
    }
}
console.log("Odd numbers:",oddArray)
console.log("sum of numbers")
let sum = 0

for(i=0;i<101;i++){
    sum += i
}
console.log(sum)


// console.log('sum of all even and odd')
let evenSum = 0,oddSum=0;
for(i=0;i<101;i++){
    if(i%2 == 0){
        evenSum += i
    }
}
for(i=0;i<101;i++){
    if(i%2 != 0){
        oddSum += i
    }
}

console.log('Some of Even numbers : ',evenSum);
console.log('Some of Odd numbers : ',oddSum);

var op = new Array;
op.push(evenSum)
op.push(oddSum)
console.log('OP:',op)

var countries = ["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]

// let countriesLength = countries.map(item)=>{
//     return item.length
// }
var countriesLength = [];
for(let i=0 ; i<countries.length;i++){
    // var len = countries[i].length;

    // countriesLength.push(len)   
    countriesLength.push(countries[i].length)
}
// let countriesLength = countries.length
console.log(countriesLength)

var big = countries.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        });
    
console.log(big)
for(i=0;i<countries.length;i++ ){
    if(countries[i].length == 5){
        console.log(countries[i])
    }
}
var reversearr = [];
var lenarr = countries.length
for(i=lenarr-1;i>=0;i-- ){
    reversearr.push(countries[i])
}
console.log('sorted array:',countries)
console.log('reverse array:',reversearr)
// console.log(len5)