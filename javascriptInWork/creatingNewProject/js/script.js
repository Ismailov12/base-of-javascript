"use strict";

// let start = new Date();

window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
//Tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");

        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, n) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(n);
                }
            });
        }
    });
    //Timer
    // let deadline = '2023-01-08';
//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return {
//             "total": t,
//             days,
//             hours,
//             minutes,
//             seconds
//         };      
//     }

//     function getZero(num) {
//         if(num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector("#days"),
//               hours = timer.querySelector("#hours"),
//               minutes = timer.querySelector("#minutes"),
//               seconds = timer.querySelector("#seconds"),
//               timeInterval = setInterval(updateClock, 1000);
//         updateClock();
//         function updateClock() {
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
            
//         } 
//     }

//     setClock(".timer ", deadline);
// });

// let end = new Date();

// console.log(`Sikl is done his at ${end / start} milliseconds`);

// TIMER MY VERSION
let deadline = '2021-01-08';

function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
    return {
        "total": t,
        days,
        hours,
        minutes,
        seconds
    };      
}

function getZero(num) {
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(endtime) {
    const timer = document.querySelector(".timer"),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000);
          updateClock();
    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total < 0) {
            clearInterval(timeInterval);
        }
    }
    
}

setClock(deadline);

});