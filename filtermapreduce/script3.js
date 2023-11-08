let arr = [1,2,3,4,5,6,7,8,9,10];
let sum =new Array;
let res = arr.reduce((val1,val2)=>{
    return val1+val2;
})
sum.push(res);
console.log('array:',arr)
console.log('sum of array:',sum)
console.log()


let string1 = ['I','Am','Fullsatck','Developer'];
 console.log('string:',string1)
 let string2 = string1.reduce((elem1,elem2)=>{
    return elem1.concat(elem2);
 })
 console.log('concatinated string:',string2);

console.log()
let obj = [
    {product : 'milk',
    price : 100},
    {product : 'sugar',
    price : 50},
    {product : 'bread',
    price : 80},
    {product : 'jam',
    price : 200},
    {product : 'egg',
    price : 6},
] 

let total = obj.reduce((prev,next)=>{
    // return (prev.price + next.price) ;
    // console.log(prev,next)
    let sum = prev + next.price;
    // console.log(prev)
    return sum;
},0)

console.log("total prize:",total)
console.log()

let transactions = [{credit:1000},{debit:400},{debit:300},{credit:400}]
    let accountBalance = transactions.reduce((balance, transactions) => {
        if (transactions.credit) {
          return balance + transactions.credit;
        } else if (transactions.debit) {
          return balance - transactions.debit;
        }
      }, 0);
      console.log("balance:",accountBalance);