const count = document.querySelector("#count");
const removeButton = document.querySelector("#remove-btn");
const button = document.querySelector("#add-btn");

let clicks = 0;

button.addEventListener("click", function () {
  clicks = clicks + 1;
  count.textContent = clicks;
});

removeButton.addEventListener("click", function () {
  clicks = clicks - 1;
  count.textContent = clicks;
});
