'use strict';
    /****  Context calling of this!!!! *****/
    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.bye = function() {
    //         console.log(`Bye ${this.name}`);
    //     };
    // }

    // User.prototype.exit = function() {
    //     console.log(`The user ${this.name} is gone `);
    // };
    // const killer = new User('Killer', 4);
    // const orif = new User('Orif', 12);

    // killer.bye();
    // orif.bye();
    // orif.exit();

// 1)  Обычная функция: this === window, 
//    but if it stays in mode "use strict" then it will be  "undefined"!!!!

    // function showThis(a, b) {
    //     console.log();
    //     function sum() {
    //         return a + b;
    //     }
    //     console.log(sum());
    // }

    // showThis(10, 10);

// 2) context in methods of objects === objects itself!!!  

// const obj = {
//     a: 12,
//     b: 45,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр обьекта
    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.bye = function() {
    //         console.log(`Bye ${this.name}`);
    //     };
    // }

// 4) Ручная привязка this = bind, apply, call!!!!

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const obj = { 
//     name: 12
// };

// sayName.call(obj, ` 08 2002`);
// sayName.apply(obj, [` 08 2002`]);


// function count(num) {
//     return this * num;
// }

// const triple = count.bind(3);
// const duble = count.bind(2);
// console.log(triple(3));
// console.log(triple(12));

// console.log(duble(5));
// console.log(duble(12));

                                // PRACTISE
// const btn = document.querySelector('button');

// btn.addEventListener("click", function()  {
// this.style.backgroundColor = 'blue';     
// });

// const obj = {
//     users: 122,
//     sayQuanntity: function() {
//         const say = () => {
//             console.log(this);            
//       };
//       say();
//     }
// };
// obj.sayQuanntity();


    /**** Classes (ES6) *****/

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}    

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
            this.text = text;
            this.bgColor = bgColor;
    }
    showMyProps() {
       console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`); 
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());
// const double = new Rectangle(12, 12);
// console.log(double.calcArea());
