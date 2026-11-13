const count = document.querySelector("#count");
const removeButton = document.querySelector("#remove-btn");
const button = document.querySelector("#add-btn");

let clicks = 0;
function changeBy(amount) {
  clicks = clicks + amount;
  count.textContent = clicks;
}

button.addEventListener("click", function () {
  changeBy(1);
});

removeButton.addEventListener("click", function () {
  changeBy(-1);
});
