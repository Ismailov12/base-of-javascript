'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    let form = document.querySelector(".add"),
        input = document.querySelector(".inpt"),
        listOfTodos = document.querySelector(".item-todo");

    const todoList = {
        first: [
            "Drink Coffee"
        ]
    };
    const crtTodoList = (todo, parent) => {
        parent.innerHTML = "";
        todo.forEach((el, i) => {
            parent.innerHTML += `<li class="list-item"> 
            ${i + 1}: ${el}
            <button class='del'>delete</button>
            <button class='impr'>important</button>
            </li>`;
        });
 
        document.querySelectorAll(".del").forEach((i, n) => {
            i.addEventListener("click", () => {
                i.parentElement.remove();
                todoList.first.splice(n, 1);

                crtTodoList(todoList.first, listOfTodos);
            });
        });
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let newTodo = input.value;
        if (newTodo !== '' && newTodo !== null) {
            if(newTodo.length > 21) {
                newTodo = `${newTodo.substring(0, 22)}...`;
            }
            todoList.first.push(newTodo);
            sortArr(todoList.first);
            crtTodoList(todoList.first, listOfTodos);
            event.target.reset();
        }
    });

    crtTodoList(todoList.first, listOfTodos);
});