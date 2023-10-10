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

const answerButton = document.querySelector('[data-js="button__answer"]');
const answersText = document.querySelector(
  '[data-js="questions__container__answers"]'
);

let isText = true;
answerButton.addEventListener("click", () => {
  answersText.classList.toggle("hidden");
  if (isText) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
  isText = !isText;
});
