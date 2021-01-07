let start = new Date();

const btn = document.querySelector(".btn");
let i = 0,
    timerId;

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 400) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}
btn.addEventListener("click", myAnimation);
for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}
let end = new Date();
alert(`Sikl done his work at ${end - start} milliseconds`);
// function logIn() {
//     if(i === 2) {
//         clearInterval(timerId);
//     }
//     console.log("Hello world");
//     i++;
// }

// function logOut() {
//         if(i === 2) {
//         clearInterval(timerId);
//     }
//     console.log("Bye User");
//     i++;
// }
