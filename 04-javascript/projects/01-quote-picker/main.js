const quote = document.querySelector("#quote");
const quotes = [
  "Life goes on",
  "Tuloy ang buhay Kaibigan",
  "Be happy",
  "Enjoy life",
];
quote.textContent = quotes[0];

const nextButton = document.querySelector("#next-btn");
let index = 0;

nextButton.addEventListener("click", function () {
  index = index + 1;
  quote.textContent = quotes[index];
});
