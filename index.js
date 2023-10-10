//---------------------Dark Mode---------------------
const darkMode = document.querySelector('[data-js="dark_mode"]');
const main = document.querySelector('[data-js="main"]');

darkMode?.addEventListener("click", () => {
  main.classList.toggle("dark");
});

//---------------------Active Bookmark Button---------------------
const filledBookmark = document.querySelector('[data-js="image_filled"]');
const emptyBookmark = document.querySelector('[data-js="image_empty"]');
const toggleButton = document.querySelector(
  '[data-js="questions__container__button-bookmark"]'
);

toggleButton.addEventListener("click", () => {
  filledBookmark.classList.toggle("hidden");
  emptyBookmark.classList.toggle("hidden");
});

//---------------------Active Show Anser Button---------------------
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
