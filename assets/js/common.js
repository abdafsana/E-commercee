function checkLocalStorageChanges() {
  const cartCountElement = document.querySelector(".cart-count");
  const storedCount = localStorage.getItem("basketCount");
  const wishCountElement = document.querySelector(".cart-counts");
  const wishedCount = localStorage.getItem("wishCnt");
  const accountDisplayElement=document.querySelector(".navbar-user")
  const accountDisplay=localStorage.getItem("loggedInUser");
  // console.log(cartCountElement)
  // console.log(storedCount)
  // console.log(wishCountElement)
  // console.log(wishedCount)
  if (storedCount !== null) {
    cartCountElement.textContent = storedCount;
    cartCountElement.style.opacity = "1";
  }
  if (wishedCount !== null) {
    wishCountElement.textContent = wishedCount;
    if (parseInt(wishedCount) === 0) {
      wishCountElement.style.opacity = "0";
    } else {
      wishCountElement.style.opacity = "1";
    }
  }
  if(accountDisplay){
    accountDisplayElement.style.display="block"
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkLocalStorageChanges();
  setInterval(checkLocalStorageChanges, 1000);
});
