let screen  = document.querySelector('#inputscr');
let buttons = document.querySelectorAll('button');

let string = '';


let arr = Array.from(buttons);
arr.map(button =>{
    button.addEventListener('click',(val)=>{
        if(val.target.innerText == '='){
            string = eval(string);

            screen.value = string;
        }
        else if(val.target.innerText == 'AC'){
            string = "";
            screen.value = string;
        }
        else if(val.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            screen.value = string;
        }
        else{
            string += val.target.innerText;
            screen.value = string;
        }
        // screen.value = eval(string)
    })
})
// screen.value = 'hi'