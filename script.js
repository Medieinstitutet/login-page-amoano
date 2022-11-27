const username = document.querySelector('[type="Username"]');
const password = document.querySelector('[type="Password"]');
const submit = document.querySelector('[type="submit"]');
const clear = document.querySelector('[type="clear"]');
const logout = document.querySelector('[type="logout"]');
const logintext = document.querySelector(".info");
const formspan = document.querySelector(".loginform");

const register = document.querySelector('[type="register"]');
const registerPage = document.querySelector(".register");
const Newregister = document.querySelector('[type="Newregister"]');

const Newname = document.querySelector('[type="Newname"]');
const Newpassword = document.querySelector("#newpassword");
let usernames = ["janne", "anwar", "amanda"];
let passwords = ["test", "fest", "plate"];

let i = window.localStorage.getItem("logged in");

function submitfunction() {
  let pos = usernames.indexOf(username.value);
  if (
    usernames.includes(username.value) &&
    password.value == passwords.at(pos)
  ) {
    localStorage.setItem("logged in", "true");
    formspan.style.display = "none";
    logout.style.display = "inline";
    logintext.innerHTML =
      username.value +
      ". Välkommen in i värmen. Vi får hoppas att allt fungerar som det ska. Lite stelt att behöva trycka på registrera två gånger bara :(";
  } else {
    logintext.innerHTML = "incorrect login";
  }
  localStorage.setItem("username", username.value);
  localStorage.setItem("usernames", usernames);
  localStorage.setItem("passwords", passwords);
}

if (i === "true") {
  formspan.style.display = "none";
  logout.style.display = "inline";
  logintext.innerHTML =
    localStorage.getItem("username") +
    ", du är fortfarande inloggad. Oroa dig inte!";
}

let openreg = false;

function registerfunction() {
  if (openreg) {
    registerPage.style.transform = "translateY(0)";
    openreg = false;
  } else {
    registerPage.style.transform = "translateY(1000%)";
    openreg = true;
  }
}

function newregisterfunction() {
  passwords.push(Newpassword.value);
  usernames.push(Newname.value);
  let storepasswords = [localStorage.getItem("usernames")];
  let storeusernames = [localStorage.getItem("passwords")];
  storepasswords.push(Newpassword.value);
  storeusernames.push(Newpassword.value);
  logintext.innerHTML =
    "Välkommen  " + Newname.value + ", du har nu registrerat dig!";
  registerPage.style.transform = "translateY(1000%)";
  openreg = true;
}

function logoutfunction() {
  submit.style.display = "inline";
  logout.style.display = "none";
  localStorage.setItem("logged in", "false");
  logintext.innerHTML = "Utloggad";
  formspan.style.display = "inline";
}

logout.addEventListener("click", logoutfunction);
Newregister.addEventListener("click", newregisterfunction);
submit.addEventListener("click", submitfunction);
register.addEventListener("click", registerfunction);
