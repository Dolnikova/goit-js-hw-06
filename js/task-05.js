let input = document.getElementById("name-input");
let greating = document.getElementById("name-output");
input.oninput = function () {
  greating.innerHTML = input.value !== "" ? input.value : "Anonymous";
};
