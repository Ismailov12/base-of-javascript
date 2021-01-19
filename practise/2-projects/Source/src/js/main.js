"use strict";
document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const popEngineer = document.querySelector(".popup_engineer"),
        popUp = document.querySelector(".popup");

  function openModal(selector, open) {
    document.querySelector(selector).addEventListener("click", (e) => {
      e.preventDefault();
      open.style.display = 'block';
    });
  }

  function hideModal(selector, close) {
    document.querySelector(selector).addEventListener("click", (e) => {
      e.preventDefault();
      close.style.display = 'none';
    });
  }

  openModal(".popup_engineer_btn", popEngineer);
  hideModal(".popup_close", popEngineer);
});