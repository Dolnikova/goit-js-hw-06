let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
decrement.addEventListener("click", minusValue);
increment.addEventListener("click", plusValue);
function minusValue() {
  counterValue--;
  value.textContent = counterValue;
}
function plusValue() {
  counterValue++;
  value.textContent = counterValue;
}
