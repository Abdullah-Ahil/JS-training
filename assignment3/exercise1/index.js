var arr1 = []
var arr2 = [1,2,3,4,5,6,7,8,9,10,11]
var len1 = arr2.length
var mid1 = Math.floor((len1/2) )
console.log(arr2[0])
console.log(arr2[mid1])
console.log(arr2[len1-1])
console.log()
var mixedDataTypes = [1,'a',2.0,'b',3]
var len2 = mixedDataTypes.length
console.log(len2)
var itCompanies = ['Facebook', 'Google', 'Microsoft','Apple', 'IBM', 'Oracle','Amazon']
console.log(itCompanies)
var len2 = itCompanies.length
var mid2 = Math.floor((len2/2) )
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[mid2])
console.log(itCompanies[len2-1])
console.log()
for(var i = 0;i<len2;i++){
    console.log(itCompanies[i].toUpperCase())
}
var str2 =['Facebook','Google', 'Microsoft', 'Apple', 'IBM','Oracle' ,'and' ,'Amazon','are' ,'big', 'companies'];

console.log(str2.join(" "))
var res = (itCompanies.includes('Apple')) ?  'Apple':'company is not found';
console.log(res)







// for(let i = 0; i<len2;i++){
//     if(itCompanies[i] == 'Apple'){
//         console.log(itCompanies[i])
//         break;
        
//     }
//     else{
    
//         console.log('company is not found')
     
//     }
// }