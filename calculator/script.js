let screen  = document.querySelector('#inputscr');
let buttons = document.querySelectorAll('button');

let string = '';


let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(val)=>{
        if(val.target.innerHtml == '='){
            string = eval(string);

            screen.value = string;
        }
        else if(val.target.innerHtml == 'AC'){
            string = "";
            screen.value = string;
        }
        else if(val.target.innerHtml == 'DEL'){
            string = string.substring(0,string.length-1)
            screen.value = string;
        }
        else{
            string += val.target.innerHtml;
            screen.value = string;

        }
    })
})
// screen.value = 'hi'