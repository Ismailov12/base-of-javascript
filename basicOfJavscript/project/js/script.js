/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) STATUS: DONE

2) Изменить жанр фильма, поменять "комедия" на "драма"  STATUS: DONE

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. STATUS: DONE
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


let adver = document.querySelectorAll(".promo__adv img"),
    bgImage = document.querySelector(".promo__bg"),
    genre = bgImage.querySelector(".promo__genre"),
      nameOfFilms = document.querySelectorAll(".promo__interactive-item");
// 1)      
// for(let i = 0; i < adver.length; i++) {
//     adver[i].remove();
// }

adver.forEach(item => {
    item.remove();
});
// 2)
genre.textContent = "Драма";

// 3)
bgImage.style.cssText = "background: url(img/bg.jpg)  no-repeat; background-size: cover; ";

// 4)
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();
nameOfFilms.forEach((item, i) => {
    item.innerHTML = `
    <li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>`;
});
