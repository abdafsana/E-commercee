document.addEventListener('DOMContentLoaded', function() {
  const cartCountElement = document.getElementById('cart-count');
  const storedCount = localStorage.getItem("basketCount");

  if (storedCount) {
    cartCountElement.textContent = storedCount;
    cartCountElement.style.opacity = "1";
  }
});