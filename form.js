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
  newCard.className = "questions";
  console.log(newCard);
  const main = document.querySelector("main");
  main.append(newCard);

  newCard.innerHTML = ` <button
  id="questions__container__button-bookmark"
  data-js="questions__container__button-bookmark"
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
  form.reset();
});
