"use strict";

                /*functionDECLARATION*/

// let num = 30;
// function showFirstMessage() {
//     console.log("Hello world");
//     num = 15;
// }

// showFirstMessage();
// console.log(num);

// function numBer() {
//     let num = 50;
//     console.log(num);
// }

// numBer();

                /*** FUNCTION EXPRESSION ***/
// const logger = function() {
//     console.log("Hello");
// };

// logger();

               /*** STRELOCHNIYE FUNCTIONS ***/
// const calc = (a, b) => { 
//     return a + b; 
// };   


/******** METHODS AND PROPS OF STRING AND NUMBER **********/
                    /*** STRING ***/
// const str = 'Hello';

// console.log(str[2]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(typeof str);

// const fruit = 'Some Fruit';

// console.log(fruit.indexOf("F"));

// const logg = 'KILLER OF THE PRESIDENT';

// console.log(logg.slice(0));
// console.log(logg.substring(1, 8));
// console.log(logg.substr(7, 2));

                /*** NUMBERS ***/
// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

// const teset = 12.2;
// console.log(parseFloat(teset));

// TASKS
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films did you watch?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?', ''); 
    }
}
// start();
const perMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

function remMyFilms() {
    for(let i = 0; i < 1; i++) {
        const a = prompt('the name of the movie!', ''),
              b = prompt('The rating of this movie!', '');
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            perMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log("ERROR");
            i--;
        } 
    }
}

// remMyFilms();


function detPersonalLev() {
    if(perMovieDB.count < 10) {
        console.log("You watched less films");
    } else if (perMovieDB.count >= 10 && perMovieDB.count <= 30 ) {
        console.log("You are classical zritel");
    } else if (perMovieDB.count > 30) {
        console.log("You are kinoman");
    } else {
        console.log("ERROR");
    }
}
// detPersonalLev();

function showMyDB(hidden) {
    if ( !hidden ) {
        console.log(perMovieDB);
    }
}

function wrtYourGenres() {

    for(let i = 1; i <= 3; i++) {
        perMovieDB.genres[i - 1] = +prompt(`Your Lovely Genre under number ${i}`);
    }
}
// showMyDB(perMovieDB.private);
wrtYourGenres();
console.log(perMovieDB.genres);