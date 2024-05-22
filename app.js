let getPassword = document.querySelector("#get-password");

let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&";

let getLength = document.querySelector("#get-length");
let getError = document.querySelector("#error");
let getCopyPass = document.getElementById("copy-password");

function randomPassword() {
  let password = "";
  if (getLength.value === "") {
    getError.innerText = "";
    for (let i = 0; i < 8; i++) {
      let randomNum = Math.floor(Math.random() * characters.length);
      password += characters[randomNum];
    }
  } else if (getLength.value > 16) {
    getError.innerText = "Password must not exceed 16 characters.";
  } else {
    getError.innerText = "";
    for (let i = 0; i < getLength.value; i++) {
      let randomNum = Math.floor(Math.random() * characters.length);
      password += characters[randomNum];
    }
  }
  getPassword.innerText = password;
  getLength.value = "";
}
function copyPassword() {
  if (getPassword.innerText === "") {
    getError.innerText = "Generate Password First";
  } else {
    navigator.clipboard.writeText(getPassword.innerText);
    getCopyPass.innerText = "Password Copied To Clipboard";
    setTimeout(() => {
      getCopyPass.innerText = "";
    }, 2000);
  }
}
