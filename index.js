const darkMode = document.querySelector('[data-js="dark_mode"]');
const main = document.querySelector('[data-js="main"]');

darkMode.addEventListener("click", () => {
  main.classList.toggle("dark");
  document.cookie =
    "darkMode=on; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
});
