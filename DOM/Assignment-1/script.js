let para1 = document.querySelectorAll('p')[0];
let para2 = document.querySelector('#para2');
let para3 = document.querySelector('#para3');
let para4 = document.querySelector('#para4');

para1.style.color = 'blue';
para1.style.fontSize = '30px';
para1.style.border = "5px solid aqua";
para1.style.padding = "1vh 1vw"
para1.setAttribute('class', 'para')
para1.style.background = "beige";
para1.style.textAlign = "center"


para2.style.color = 'blue';
para2.style.fontSize = '30px';
para2.style.border = "5px solid aqua";
para2.setAttribute('class', 'para')
para2.style.background = "beige";
para2.style.padding = "1vh 1vw"
para2.style.textAlign = "center"

para3.style.color = 'blue';
para3.style.fontSize = '30px';
para3.style.border = "5px solid aqua";
// para3.style.family = "verdena";
para3.setAttribute('class', 'para')
para3.style.background = "beige";
para3.style.padding = "1vh 1vw"
para3.style.textAlign = "center"


para4.style.color = 'blue';
para4.style.fontSize = '30px';
para4.style.border = "5px solid aqua";
para4.textContent = "hi hello ";
para4.setAttribute('class', 'para')
para4.style.background = "beige";
para4.style.padding = "1vh 1vw"
para4.style.textAlign = "center"


let heading1 = document.getElementById('h1');
heading1.innerText = "DOM assignment 1"
heading1.style.textAlign = "center"
heading1.style.color = 'red';
// heading1.style.backgroundColor = "aqua"

let colors = ['blue', 'green', 'yellow', 'gray','white','pink','purple'];
// setInterval(colors.map((color) => {
//     // heading1.style.backgroundColor = color
//     // console.log("hello")
// }), 500)
i = 0
// function change() {
// }
setInterval(()=>{
    heading1.style.backgroundColor = colors[i];
    if(i== colors.length){
        i = 0
    }
    else{
    i += 1;

    }
},600)