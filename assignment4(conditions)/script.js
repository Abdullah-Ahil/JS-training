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

largest(51,8,10);


// Exercise 2
let data = {
    'admin':['create','update','read','delete'],
    'user':['read','update'],
    'guest':['read'],
}

function checkPermission(userRole,action){
    if(userRole == 'admin' && data.admin.includes(action)){
        console.log("Permission granted")
    }
    else if(userRole == 'user' && data.user.includes(action)){
        console.log("Permission granted")
    }
    else if(userRole == 'guest' && data.guest.includes(action)){
        console.log("Permission granted")
    }
    else{
        console.log('permission Denied')
    }
}

checkPermission('user','read')
checkPermission('admin','update')
checkPermission('guest','create')

function calculateDiscountedPrice(prize){

    let actualPrice = prize/10;
    let total = prize-actualPrice;
    if(prize >= 50){
     console.log("discounted prize:",total)
    }else{
        console.log("No discount")
    }
}

calculateDiscountedPrice(60)