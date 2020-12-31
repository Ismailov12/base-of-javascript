                /*** EVENT HANDLING ***/

// const btn = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay'),
//     href = document.querySelector("a"),
//     incr = document.querySelector(".incr"),
//     decr = document.querySelector(".decr");

// let zero = document.querySelector(".zero");


// let i = 0;
// // btn.addEventListener('mouseenter', () => {
// //     console.log("Hello");
// // });


// const delElem = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };


// function add(e) {
//     e.target.value = i++;
// }

 

// incr.addEventListener("click", );

// decr.addEventListener('click', );

 
// btn.addEventListener('click', delElem);
// overlay.addEventListener('click', delElem);
// href.addEventListener('click', (e) => {

//     console.log(e.target);
// });


// let matematikaXimiyaFizika = "11 topics";

// ozbek tilini soxada qollash = 9topics

// ingliz tili = 5topics

// c++ = 10topics;
 

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector("#btn").parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (const node of document.body.childNodes) {
//     const nodeName = node.nodeName;
//     if(nodeName == 'BUTTON' || nodeName == "DIV" || nodeName == '#text' || nodeName == '#comment') {
//         continue;
//     }

//     console.log(node);
// }

// console.log(document.body.childNodes);



            /*** MOBILE EVENTSHANDLING ***/ 

// TOUCHSTART - HANDLING WILL GET STARTED WHEN WE TOUCH THE SCREEN
// TOUCHMOVE - HANDLING WILL GET STARTED WHEN WE MOVING THE SCREEN
// TOUCHEND - HANDLING WILL GET STARTED WHEN WE REMOVE THE ARM FROM SCREEN
// TOUCHENTER - 
// TOUCHLEAVE -
// TOUCHCANCEL - 

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    const btn = document.querySelector("#btn");

    btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log("HELLO");
    });

    btn.addEventListener("touchmove", (event) => {
        event.preventDefault();
        console.log("MOVE");
    });

    btn.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log("ENDED");
    })
});

