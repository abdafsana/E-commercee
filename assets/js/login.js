const form = document.querySelector(".form-body");

form.addEventListener("submit", function (e) {
  e.preventDefault();
//   console.log("clicked");
  getUserData();
});

function getUserData() {
  fetch("http://localhost:3000/user")
    .then((response) => response.json())
    .then((data) => checkUser(data));
}

function checkUser(users) {
  const emailorPhoneInput = document.querySelector(".emailOrPhone-input").value;
  const passwordInput = document.querySelector(".password-input").value;
//   console.log(users);
  users.forEach((user) => {
    // console.log(user.emailOrPhone);
    // console.log("email input", emailorPhoneInput);
    // console.log("pass input", passwordInput);

    if (user.emailOrPhone === emailorPhoneInput && user.password === passwordInput) {
    // alert("succesfully");
        // console.log("succesfuly");
        window.location.href="../index.html";
    }
    passwordInput.value = "";
    emailorPhoneInput.value = "";
});
}
