let nvbruser=document.querySelector(".navbar-user");

document.addEventListener("DOMContentLoaded", function() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  
  if (loggedInUser) {
    // Kullanıcı giriş yapmışsa, navbar'ı göster
    const nvbruser = document.querySelector(".navbar-user");
    if (nvbruser) {
      nvbruser.style.display = "block";
      localStorage.getItem("lo")
    }
  }
const logbtn= document.querySelector(".login-button");
  logbtn.addEventListener("click", function (e) {
    e.preventDefault();
    getUserData();
  });
});

function getUserData() {
  fetch("http://localhost:3000/user")
    .then((response) => response.json())
    .then((data) => checkUser(data));
}
function checkUser(users) {
  const emailorPhoneInput = document.querySelector(".emailOrPhone-input").value;
  const passwordInput = document.querySelector(".password-input").value;
  if(emailorPhoneInput!=null){
    let u=users.find(u=>u.emailOrPhone==emailorPhoneInput)
    console.log(u);
    if (u.password === passwordInput) {
      window.location.href="./index.html";
    }
  }
  document.querySelector(".emailOrPhone-input").value = "";
  document.querySelector(".password-input").value = "";
}
