const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(email.value, password.value);
  event.currentTarget.reset();
});
