"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// alert(number);

// const obj = {
//     a:50,
// };

// obj.a = 15;

// console.log(obj);

/*** STRING ***/
// const person = 'Alex';
// console.log(person);

/***BOOLEAN***/
// const bool = false;

//          ****NULL OR UNDEFINED****
// console.log(smth);

//             ***OBJECTS***
// const obj = {
//     name: 'Orif',
//     age:18,
//     isMarried: false,
// }

// console.log(obj["name"]);

//              *** ARRAY ***
// let arr = ['apple.jpg', 6, 12, 3, 45];

/***  ------------Простое обшение с пользователем-----  ***/
// alert('Hello');

// const res = confirm("Are you here?");
// console.log(res);

// const answer = +prompt('Are you 18?', ''); 
// alert(answer +  90);


// const answers = [];

// answers[0] = prompt('Heeloo', '');
// answers[1] = prompt('Heelooasd', '');
// answers[2] = prompt('Heeloo2323', '');

// console.log(
//     "Name: " + typeof(answers),
//     " 2: " + typeof(answers),
//     " answers: " + typeof(answers),
// );


/** ----------Интерполяция-------- ***/
// const user = "Orif";

// alert(`Hello, ${user}`);

/*** ------Операторы-------  ***/

// console.log(4 + +"5")    

//  ------------INCREMENT AND DECREMENT------------
// let incr = 10,
//     decr = 10;
// // incr++; POSTFIKSNAYA
// // decr--; POSTFIKSNAYA

// // ++incr; // PREFIKSNAYA
// // --decr; // PREFIKSNAYA

// // console.log(incr++);
// // console.log(decr--);
// console.log(++incr);
// console.log(--decr);

//               ---------РАВЕНСТВО--------
// console.log(2 - 5 === 3);

//     ----------ОПЕРАТОРЫ (|| - OR) (&& - AND) (! - ОТРИЦАНИЕ)--------
// (&&) - оно возрашает true если все фргументы true в остальном возрашает false 
// const isChecked = true,
//     isClosed = false;
// console.log(isChecked && isClosed);    

// || - оно возврашет true если хотя бы один из аргументов true

// const isClosed = false,
//     isOpen = true;
// console.log(isClosed || isOpen);    

// ! - оно преврашает значение в обратное
 

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const a = prompt('One of the last movies you watched?', ''),
      b = prompt('How you rate it?', ''),
      c = prompt('One of the last movies you watched?', ''),
      d = prompt('How you rate it?', '');

personalMovieDB.movies[a] = b;


console.log(personalMovieDB);