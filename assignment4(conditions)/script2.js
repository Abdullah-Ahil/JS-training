// #3
// let age = prompt("Enter your age:");
// if(age>=18){
//     document.write("You are old enough to drive")
// }
// else{
//     let ageRes = 18 - age;
//     document.write('wait for ',ageRes," year");
// }

// #6

let dayVar =  prompt("Enter day name");
dayVar =  dayVar.toLowerCase()
let day = dayVar
switch(day)
{
    case 'monday':
        document.write(day," is working day");
        break;
    case 'tuesday':
        document.write(day," is working day");
        break;
    case 'wednesday':
        document.write(day," is working day");
        break;
    case 'thursday':
        document.write(day," is working day");
        break;
    case 'friday':
        document.write(day," is working day");
        break;
    case 'saturday':
        document.write(day," is not a working day");
        break;
    case 'sunday':
        document.write(dayVar," is not a working day");
        break;
    default:
        alert("enter correct name!!");
        break;
 }