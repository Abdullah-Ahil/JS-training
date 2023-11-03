// #1
let a=10,b=9;

if(a>b){
    console.log('a is greater than b')
}
else{
    console.log('b is greater than a')

}

let res = a>b ? 'a is greater than b' :'b is greater than a';
console.log('ternary operator output:',res)

// #2
if(a%2 ==0){
    console.log(a,' is Even number')
}
else{
    console.log(a,' is Odd number')

}

// #4

function largest(a,b,c){
    if(a>b && a>c){
        console.log(a,' is largest number');
    }
    else if(b>a && b>c){
        console.log(b,' is largest number');
    }
    else{
        console.log(c,' is largest number');
 }
}

largest(5,8,1);
