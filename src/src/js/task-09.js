function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector("change-color");
const changeColor = document.querySelector("color");
const bodyElement = document.querySelector("body");
// changeColor.textContent = "#ffffff";
changeColorBtn.addEventListener("click", change);

function change(event) {
  event.preventDefault();
  bodyElement.style.backgroundColor = getRandomHexColor();
  changeColor.innerHTML = `${getRandomHexColor()}`;
  // console.log(getRandomHexColor());
}
