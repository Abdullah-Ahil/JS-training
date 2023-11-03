let arr = [1,2,3,4,5,6,7];
const ul = document.getElementById('ul');
let  li = document.createElement('li')
// let values = arr.map()


for(let i=0;i<arr.length;i++){
    li = arr[i]
    ul.appendChild(li)
}

console.log(ul)


// for() {
//     ul.append(<li>i</li>)
//     }