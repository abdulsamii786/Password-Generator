let getPassword = document.querySelector("#get-password");

let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&";

let getLength = document.querySelector("#get-length");
let getError = document.querySelector("#error");

function randomPassword() {
  let password = "";
  if (getLength.value === "" || getLength.value < 0) {
    getError.innerText = "Please Enter Valid Password Length";
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
