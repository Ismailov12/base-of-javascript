'use strict';
// let start = new Date();
const box = document.querySelector(".box"),
      btn = document.querySelector("button"),
      zero = document.querySelector(".zero");

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener("click", () => {
    // box.style.height = box.scrollHeight + 'px';
    function zeRo() {
        zero.innerHTML = box.scrollTop;
    }
    setInterval(zeRo, 100);
});

const style = window.getComputedStyle(zero);
console.log(style.display);
// let end = new Date();
// console.log(`ITS DONE ITS AT ${end - start} milliseconds`);