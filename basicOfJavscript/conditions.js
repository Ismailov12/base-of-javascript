"use strict";

if( 4 == 4) {
    console.log('Great');
} else {
    console.log('Bad');
}

const num = +prompt('Write a number!', '');

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Much more');
} else {
    console.log("Good Luck");
}

(num == 60) ? console.log("Good Luck") : console.log("Error");

switch (num) {
    case 49:
        console.log('Very bad');
        break;
    case 50:
        console.log("Not Bad");
        break;
    case 51:
        console.log("Learn Math");
    default:
        console.log("Not this time");
        break;            
}

 