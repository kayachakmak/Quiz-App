//---------------------Dark Mode---------------------
const darkMode = document.querySelector('[data-js="dark_mode"]');
const main = document.querySelector('[data-js="main"]');
const navbar = document.querySelector('[data-js="navbar"]');

darkMode?.addEventListener("click", () => {
  main.classList.toggle("dark");
  navbar.classList.toggle("navbarDark");
});

//---------------------Active Bookmark Button---------------------
const filledBookmarks = document.querySelectorAll('[data-js="image_filled"]');
const emptyBookmarks = document.querySelectorAll('[data-js="image_empty"]');
const toggleButtons = document.querySelectorAll(
  ".questions__container__button-bookmark"
);

toggleButtons?.forEach((button, index) => {
  button.addEventListener("click", () => {
    filledBookmarks[index].classList.toggle("hidden");
    emptyBookmarks[index].classList.toggle("hidden");
  });
});

//---------------------Active Show Answer Buttons---------------------
const answerButtons = document.querySelectorAll(".button__answer");
const answersText = document.querySelectorAll(".questions__container__answers");

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Toggle the 'hidden' class on the next <p> element
    answersText[index].classList.toggle("hidden");

    // Change the button text based on its current state
    if (answersText[index].classList.contains("hidden")) {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
  });
});
