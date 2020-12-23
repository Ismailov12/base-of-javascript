"use strict";
                /******** CONDITIONS *******/
// if( 4 == 4) {
//     alert('Great');
// } else {
//     alert('Bad');
// }

// const num = +prompt('Write a number!', '');

// if(num < 49) {
//     alert('Error');
// } else if (num > 100) {
//     alert('Much more');
// } else {
//     alert("Good Luck");
// }

// (num == 60) ? alert("Good Luck") : alert("Error");

// switch (num) {
//     case 49:
//         alert('Very bad');
//         break;
//     case 50:
//         alert("Not Bad");
//         break;
//     case 51:
//         alert("Learn Math");
//     default:
//         alert("Not this time");
//         break;            
// }

                /******** SIKLI ********/
// let num = 10;

// while (num <= 20) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// } while (num < 15);

// for (let i = 1;  i < 10; i++) {
//     if(i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

let numberOfFilms = +prompt("How many films did you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 1; i++) {
    const a = prompt("awdawdasd???", ''),
          b = prompt("1654165", "");

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
    } else {
        console.log("ERROR");
        i--;
    }     
}

if(personalMovieDB.count < 10) {
    console.log("You watched less films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log("You are classical zritel");
} else if (personalMovieDB.count > 30) {
    console.log("You are kinoman");
} else {
    console.log("ERROR");
}

console.log(personalMovieDB);