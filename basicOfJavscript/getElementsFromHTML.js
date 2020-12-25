const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

for ( let i = 0; i < btns.length; i++ ) {
    btns[i].style.borderRadius = "400px";
    btns[i].style.color = "tomato";

}

const style = {
    colors: {
        green: "green",
        red: "red",
        blue: "blue"
    },
    width: "120px"
};

box.style.cssText = `background-color: ${style.colors.green}; width: ${style.width}`;

const div = document.createElement("div");

div.style.cssText = `width: 150px; 
                    height: 150px; 
                    background-color: purple;`;

div.classList.add("black");

// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.before(div);
// box.after(div);

// for(let i = 0; i <= circles.length; i++) {
//     circles[i].remove();
// }

heart[0].replaceWith(circles[0]);