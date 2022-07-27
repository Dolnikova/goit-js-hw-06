const input = document.getElementById("validation-input");
let totalLenght = input.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);
input.oninput = function () {
  input.value.length === intTotallenght ? addValid : removeValid;
};
function addValid() {
  input.classList.remove("invalid");
  input.classList.add("valid");
}
function removeValid() {
  input.classList.add("invalid");
}
