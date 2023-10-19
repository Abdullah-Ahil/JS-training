var str1 = 'assignment';
var str2 = 'ASSIGNMENT';
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
var str3 ='Hello World';
console.log(str3.slice(6))
var str4 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon';
console.log( str4.split(","))
var str5 = 'javascript'
console.log(str5.indexOf('a'));
console.log(str5.lastIndexOf('a'));
var str6 = 'javascript is used '
var str7 = 'to add functionalities to the web app'
console.log(str6 + str7);
console.log(str6.concat(str7));
var str8 = "This course is all about Javascript"
console.log(str8.includes("Javascript"));
console.log(Math.random()*100);
// console.log((Math.random()*100));
console.log(Math.floor(Math.random()*((100-50)+1) +50) );
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
var str9 = 'He earns 50000 from salary per month, 10000 annual bonus.'
// console.log(str9.indexOf(50000))
console.log('Anual Income:'+((str9.substring(9,14)*12)+10000))



