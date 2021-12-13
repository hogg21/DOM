const baseUrl = "https://61b7b29564e4a10017d18c6f.mockapi.io/api/v1/users";
const emailField = document.querySelector("#email");
const userNameField = document.querySelector("#name");
const passwordField = document.querySelector("#password");

const submitButton = document.querySelector(".submit-button");
const formElement = document.querySelector(".login-form");
const errorElement = document.querySelector(".error-text");

const isValidForm = () => {
  if (
    emailField.reportValidity() ||
    userNameField.reportValidity() ||
    passwordField.reportValidity()
  ) {
    submitButton.disabled = false;
  }
  errorElement.textContent = "";
};
const sendData = (formData) => {
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};
const submitData = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElement));
  sendData(formData)
    .then((response) => response.json())
    .then((userData) => {
      alert(JSON.stringify(userData));
      formElement.reset();
      submitButton.disabled = true;
    })
    .catch(() => {
      errorElement.textContent = "Failed to create user";
    });
};
formElement.addEventListener("submit", submitData);
formElement.addEventListener("input", isValidForm);
