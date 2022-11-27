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
var usernames = ["janne", "anwar", "amanda"];
var passwords = ["test", "fest", "fest"];

if (localStorage.getItem("usernames") === null) {
  localStorage.setItem("usernames", usernames);
  localStorage.setItem("passwords", passwords);
}

let i = window.localStorage.getItem("logged in");

function submitfunction() {
  let localusers = localStorage.getItem("usernames");
  let localpasswords = localStorage.getItem("passwords");
  let localsplitusers = localusers.split(",");
  let localsplitpassword = localpasswords.split(",");
  let pos = localsplitusers.indexOf(username.value);
  if (
    localsplitusers.includes(username.value) &&
    password.value == localsplitpassword.at(pos)
  ) {
    localStorage.setItem("logged in", "true");
    formspan.style.display = "none";
    logout.style.display = "inline";
    logintext.innerHTML =
      username.value +
      ", jag måste säga att det är kul att ha dig här. Vi får hoppas att allt fungerar som det ska. Lite stelt att behöva trycka på registrera två gånger bara :(";
  } else {
    logintext.innerHTML = "Fel användarnamn/lösenord";
  }
  localStorage.setItem("username", username.value);
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
  let storepasswords = [localStorage.getItem("passwords")];
  let storeusernames = [localStorage.getItem("usernames")];
  storepasswords.push(Newpassword.value);
  storeusernames.push(Newpassword.value);
  localStorage.setItem("usernames", storeusernames);
  localStorage.setItem("passwords", storepasswords);
  console.log(storeusernames);
  console.log("Välkommen");
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
