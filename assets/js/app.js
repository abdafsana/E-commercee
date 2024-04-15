const form = document.querySelector(".form-body");

form.signUp.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const usernameRegex = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const emailOrPhoneRegex =
    /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|\+(?:[0-9] ?){6,14}[0-9])$/;

  if (form.username.value !== "" && usernameRegex.test(form.username.value)) {
    console.log("passed username");
    form.username.style.borderColor = "black";
  }
  if (
    form.emailOrPhone.value !== "" &&
    emailOrPhoneRegex.test(form.emailOrPhone.value)
  ) {
    console.log("passed emailOrPhone");
    form.emailOrPhone.style.borderColor = "black";
  }
  if (form.password.value !== "" && passwordRegex.test(form.password.value)) {
    console.log("passed password");
    form.password.style.borderColor = "black";
  }
  if (
    usernameRegex.test(form.username.value) &&
    emailOrPhoneRegex.test(form.emailOrPhone.value) &&
    passwordRegex.test(form.password.value)
  ) {
    const user = {
      username: form.username.value,
      password: form.password.value,
      emailOrPhone: form.emailOrPhone.value,
    };
    dataSendToServer(user);
    window.location.href = "../login.html";
    form.reset();
    console.log("hamisindan kecdi");
  } else {
    console.log("Error");
    form.username.style.borderColor = "red";
    form.emailOrPhone.style.borderColor = "red";
    form.password.style.borderColor = "red";
  }
}

function dataSendToServer(data) {
  fetch("http://localhost:3000/user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
