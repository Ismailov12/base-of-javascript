"use strict";

/*** CALLBACK FUNCTIONS!!! ***/
// function learnJS(lang, callback) {
//     console.log(`I am learning ${lang}!`);
//     callback();
// }

// learnJS("Front-end", function() {
//     console.log("I`ve done this lesson!");
// });

/*** OBJECTS, DESTRUCTIRING OBJECTS!!! ***/
// const user = {
//     name: "Orif",
//     age: 18,
//     height: 171,
//     weight: 55,
//     nationality: "Uzbek",
//     defition: {
//         hair: "black",
//         teenColor: "white",
//         isHadnsome: true,
//     },
//     makeTest: function() {

//     }
// };

// console.log(user.defition);

// delete user.age;

// console.log(user);

// for (let key in user) {
//     if(typeof user[key] == "object") {
//         for (let i in user[key]) {
//             console.log(`Props ${i} has ${user[key][i]}`);
//         }
//     } else {
//         console.log(`Props ${key} has ${user[key]}`);
//     }
// }

// console.log(Object.keys(user).length);

// const fruits = {
//     name: "Apple",
//     color: "Red",
//     weight: 12
// };

// console.log(Object.keys(fruits).length);

// const vegetables = {
//     name: "Swarrow",
//     color: "orange",
//     weight: "12kg",
//     def: {
//         height: "12px",
//         width: "13px",
//     }
// };

// console.log(Object.keys(vegetables).length);


            /*** ARRAYS AND PSEUDOARRAYS!!! ***/
// const arr = [ 11, 42, 83, 74, 55 ];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop(); // REDUCE THE LAST ELEMENT OF THE ARRAY
// arr.push(45); // ADD NEW ELEMENT TO THE LAST ELEMENT OF THE ARRAY
// arr.shift(); // REDUCE THE FIRST ELEMENT OF THE ARRAY
// arr.unshift();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside of the ${arr}`);
// });

// for(let value of arr) {
//     console.log(arr[value]);
// }

// const str = prompt("", "");
// const prod = str.split(",");
// prod.sort();
// console.log(prod.join('; '));

// const ask = prompt("", "");
// const prod = ask.split(",");
// prod.sort();
// console.log(ask);


// const arr1 = ["Orif", "Ismailov", "Muhammadjo Og'li"];
// console.log(arr1.sort());


                    /*** SPREAD OPERATOR ***/
// let a = 5,
//     b = a;
// b += 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj; // ссыыллккаа
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function objCopy(mainObj) {
//     let copy = {};

//     for (let key in mainObj) {
//         copy[key] = mainObj[key];
//     }
//     return copy;
// }

// const data = {
//     name: "Orif",
//     gender: "Male",
//     age: "18",
//     job: {
//         front: "End",
//         back: "End",
//     }
// };

// console.log(data);

// const newData = objCopy(data);

// newData.name = "Ismailov";
// newData.gender = "Male";
// newData.age = "19";
// newData.job.front = "frontend";
// console.log(newData);

// const numbers = {
//     a: 1,
//     b: 2,
//     c: 3,
// }; 

// const add = {
//     d: 4,
//     e: 5,
//     f: {
//         x: 6,
//         y: 7,
//     },
// };

// const clone = Object.assign({}, numbers);
// clone.a = 12;
// console.log(numbers);
// console.log(clone);


// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1] = 'HEllo World';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'uztube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs];
// console.log(internet);

// const newInternet = [...internet];

// newInternet[2] = "KILLER";
// console.log(newInternet);

// const obj = {
//     two: 2,
//     three: 3,
// }

// console.log(obj);

// const newObj = {...obj};
// newObj.three = "three";
// console.log(newObj);


/*** BASICS OF OOP AND PROTOTYPE-ORIENTED INHERITANCE ***/
// const soldiers = {
//     health: 100,
//     damage: 120,
//     attackEnemy: function() {
//         console.log("You killed your enemy");
//     }
// }

//  const user = {};

// // console.log(user.attackEnemy());

// Object.setPrototypeOf(user, soldiers);
// console.log(user.attackEnemy());

