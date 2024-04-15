function checkLocalStorageChanges() {
  const cartCountElement = document.querySelector(".cart-count");
  const storedCount = localStorage.getItem("basketCount");
  const wishCountElement = document.querySelector(".cart-counts");
  let wishedCount = localStorage.getItem("wishCnt");
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
    wishCountElement.style.opacity = "1";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkLocalStorageChanges();
  setInterval(checkLocalStorageChanges, 1000);
});
