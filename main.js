function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
  document
    .querySelector("#linkForgottenPassword")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      forgottenPassword.classList.remove("form--hidden");
    });
  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameNew = document.getElementById("usernameNew").value;
    let passwordNew = document.getElementById("passwordNew").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    //localStorage.getItem("username" + "password");

    const objPeople = [
      {
        username: "janne",
        password: "test",
      },
      {
        username: "amanda",
        password: "plate",
      },
    ];

    for (i = 0; i < objPeople.length; i++) {
      if (
        username == objPeople[i].username &&
        password == objPeople[i].password
      ) {
        setFormMessage(loginForm, "error", "Lyckad inloggning!");
        loginForm.classList.add("form--hidden");
        info.classList.remove("form--hidden");
        const upperCaseUsername = username.charAt(0).toUpperCase();
        const usernameWithoutFirstLetter = username.slice(1);

        document.getElementById(
          "welcomeHeader"
        ).innerHTML = `Välkommen ${upperCaseUsername}${usernameWithoutFirstLetter}`;
        document.getElementById(
          "welcomeText"
        ).innerHTML = `Detta är ett viktigt meddelande till dig ${upperCaseUsername}${usernameWithoutFirstLetter}. Du har 10 sekunder på dig att logga ut och springa hemifrån! Big brother is watching you`;
      } else {
        setFormMessage(loginForm, "error", "Ogiltigt användarnamn/lösenord");
      }

      e.preventDefault();
    }

    function autoLogin() {
      let username = localStorage.getItem("username");
      let password = localStorage.getItem("password");
      document.getElementById("username").innerHTML = "username";
      document.getElementById("password").innerHTML = "password";
    }
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "usernameNew" &&
        e.target.value.length > 0 &&
        e.target.value.length < 4
      ) {
        setInputError(
          inputElement,
          "Användarnamnet måste vara minst 4 tecken långt"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
