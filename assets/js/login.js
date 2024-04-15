const logbtn = document.querySelector(".login-button");

logbtn.addEventListener("click", function (e) {
  e.preventDefault();
  getUserData();
});

function getUserData() {
  fetch("http://localhost:3000/user")
    .then((response) => response.json())
    .then((data) => checkUser(data));
}

function checkUser(users) {
  const emailOrPhoneInput = document.querySelector(".emailOrPhone-input").value;
  const passwordInput = document.querySelector(".password-input").value;

  const user = users.find((u) => u.emailOrPhone === emailOrPhoneInput);

  if (user && user.password === passwordInput) {
    window.location.href = "./index.html";

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    document.querySelector(".emailOrPhone-input").value = "";
    document.querySelector(".password-input").value = "";
  }
}
