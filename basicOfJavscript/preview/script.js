const btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay'),
  href = document.querySelector("a");      
let i = 0;
btn.addEventListener('mouseenter', () => {
    console.log("Hello");
});
 

const delElem = (e) => { 
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if(i == 1) {
        btn.removeEventListener('click', delElem);
    }
};

btn.addEventListener('click', delElem);
overlay.addEventListener('click', delElem);
href.addEventListener('click', (e) => {
 
    console.log(e.target);
});