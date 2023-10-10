const darkMode = document.querySelector('[data-js="dark_mode"]');
const main = document.querySelector('[data-js="main"]');

// darkMode.addEventListener("click", () => {
//   main.classList.toggle("dark");
// });

const filled_bookmark = document.querySelector('[data-js="image_filled"]');
const empty_bookmark = document.querySelector('[data-js="image_empty"]');
toggleButton = document.querySelector("#questions__container__button-bookmark");

toggleButton.addEventListener("click", () => {
  filled_bookmark.classList.toggle("hidden");
  empty_bookmark.classList.toggle("hidden");
});
