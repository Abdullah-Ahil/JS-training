let button = document.querySelector('#btn');
let users = document.querySelector('users');

function apiCall(url, callBack) {
   let xhr = new XMLHttpRequest()
   console.log(xhr)
   // console.log('hi ')

   xhr.responseType = 'json'
   xhr.onprogress = function () {
      console.log("loading...")
   }
   xhr.onload = function () {
      callBack(xhr.response)

   }

   xhr.open('GET', url)
   xhr.send()

}

button.addEventListener('click',function (){
   apiCall('https://dummyjson.com/users',(data)=>{
      console.log(data.users)
   let dataUser = data.users
   console.log(dataUser[0])
   
   // dataUser.map((user)=>{
   //    apiCall(`https://dummyjson.com/users/${data.users}`,(data)=>{
   //       console.log(data)
   //    })
   // })
   })
})    

// button.addEventListener('click', function () {
//    apiCall('https://dummyjson.com/users', (data) => {
//       console.log(data);
//       console.log('done');
//       apiCall(`https://dummyjson.com/users/${data.users[0].id}`, (userData) => {
//          console.log(userData);
//          console.log('done');
//          apiCall(`https://dummyjson.com/users/${userData.id}`, (data) => {
//             console.log(data.age)
//             console.log('done');

//          })
//       })
//    })
// })




