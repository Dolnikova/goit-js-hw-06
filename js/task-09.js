function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  changeColor.textContent = color;
  body.style.backgroundColor = color;
});
