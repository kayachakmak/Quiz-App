//---------------------Form Entries---------------------
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);

  const question = data.questionEntry;
  const answer = data.answerEntry;
  const tag = data.tag;

  const newCard = document.createElement("div");
  newCard.className = "questions animated";
  console.log(newCard);
  const main = document.querySelector("main");
  main.append(newCard);

  newCard.innerHTML = ` <button
  class="questions__container__button-bookmark"
 >
  <img
    data-js="image_filled"
    src="./resources/bookmark_filled.png"
    alt="bookmark icon"
    class="image_resized hidden"
  />
  <img
    data-js="image_empty"
    src="./resources/bookmark.png"
    alt="bookmark icon"
    class="image_resized"
  />
 </button>
 <p>
  ${question}
 </p>
 <button type="button" class="button__answer" data-js="button__answer">
  Show Answer
  </button>
 <p
  class="questions__container__answers hidden"
  data-js="questions__container__answers">
 ${answer}
 </p>
 <div class="hashtags">
  <span>#${tag}</span> </div>`;
  amountLeft.textContent = maxLenght;
  amountLeftAnswer.textContent = maxLenght;
  form.reset();
});

const questionEntry = document.querySelector('[data-js="form__entry__text"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const answerEntry = document.querySelector('[data-js="form__answer__text"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLenght = questionEntry.getAttribute("maxlength");

questionEntry.addEventListener("input", (event) => {
  amountLeft.textContent = maxLenght - event.target.value.length;
});

answerEntry.addEventListener("input", (event) => {
  amountLeftAnswer.textContent = maxLenght - event.target.value.length;
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
