const input = document.getElementById("validation-input");
let totalLenght = input.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);
input.oninput = function () {
  if (input.value.length === intTotallenght) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (input.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else if (
    input.value.length !== intTotallenght &&
    input.value.length !== 0
  ) {
    input.classList.add("invalid");
  }
};
