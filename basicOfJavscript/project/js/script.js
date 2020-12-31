/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) STATUS: DONE

2) Изменить жанр фильма, поменять "комедия" на "драма"  STATUS: DONE

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. STATUS: DONE
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// document.addEventListener("DOMContentLoaded", (event) => {
//     event.preventDefault();

//     const adv = document.querySelectorAll(".promo__adv img"),
//         genre = document.querySelector(".promo__genre"),
//         img = document.querySelector(".promo__bg"),
//         films = document.querySelector(".promo__interactive-list");

//     adv.forEach((item) => {
//         item.remove();
//     });

//     genre.textContent = "Драма";

//     img.style.backgroundImage = "url(img/bg.jpg)";

//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     movieDB.movies.sort();

//     films.innerHTML = "";

//     movieDB.movies.forEach((film, i) => {
//         films.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//          </li>
//         `;
//     });
// });

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    const adv = document.querySelectorAll(".promo__adv img"),
        genre = document.querySelector(".promo__genre"),
        img = document.querySelector(".promo__bg"),
        filmsList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(".add"),
        input = document.querySelector(".adding__input"),
        checkbox = document.querySelector("[type='checkbox']");

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const checkBox = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (checkBox) {
                console.log(`The ${newFilm} added to favorites`);
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            crtMovieList(movieDB.movies, filmsList);
        }



        event.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
    };

    const crtMovieList = (film, parent) => {
        parent.innerHTML = "";
        sortArr(film);
        film.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
             </li>
            `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                crtMovieList(movieDB.movies, filmsList);
            });
        });


    };

    const delElem = (item) => {
        item.forEach((data) => {
            data.remove();
        });
    };

    const makeChanges = (text, bg) => {
        text.textContent = "Драма";
        bg.style.backgroundImage = "url(img/bg.jpg)";
    };


    makeChanges(genre, img);
    delElem(adv);
    crtMovieList(movieDB.movies, filmsList);
});