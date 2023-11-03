var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart)
shoppingCart.push('Sugar');
console.log(shoppingCart)
shoppingCart.splice(4, 1)
console.log(shoppingCart)
shoppingCart[3] = 'Green Tea '
console.log(shoppingCart)
console.log()

var countries = ['india', 'china', "maldives"]

if (countries.includes('india')) {
    console.log('INDIA')
}
else {
    countries.push('india')
}
console.log()

var frontEnd = ['HTML','CSS','JS' ,'React']
var backEnd = ['Node','Express','MongoDB']
var fullsatck = frontEnd.concat(backEnd)
console.log('fullsatck : '+fullsatck)