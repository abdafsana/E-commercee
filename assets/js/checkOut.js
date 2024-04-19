async function checkoutCartProducts() {
  const cartItems = JSON.parse(localStorage.getItem("cartItemsBasket")) || [];
  const productIds = cartItems.map((item) => item.productId);

  let totalPrice = 0;

  for (const productId of productIds) {
    const response = await fetch(
      `http://localhost:3000/product?id=${productId}`
    );
    const product = await response.json();

    checkoutCartItems(product); 
    totalPrice += calculateTotalPrice(product); 
  }

  displayTotalPrice(totalPrice); 
}

const checkoutContainer = document.querySelector(".chck-container");
const subtotalElement = document.querySelector(".cart-list--data");
const totalElement=document.querySelector(".cart-list--itemF>.cart-list--data")

function checkoutCartItems(products) {
  products.forEach((item) => {
    checkoutContainer.innerHTML += `
        <div class="checkOut-list--item1">
          <div class="chckOut-list--div display__com">
            <div class="list-div--header chckOut-div--item">
              <img src="${item.images[0]}" alt="${item.title}" />
              <p class="common-poppins__text chck-txt">${item.title}</p>
            </div>
            <div class="chckOut-div--price chckOut-div--item">
              <p class="common-poppins__text">$${item.price}</p>
            </div>
          </div>
        </div>`;
  });
}

function calculateTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += parseInt(item.price);
  });
  return totalPrice;
}

function displayTotalPrice(totalPrice) {
  subtotalElement.innerHTML += `$${parseInt(totalPrice).toFixed(2)}`; 
  totalElement.innerHTML += `$${parseInt(totalPrice).toFixed(2)}`; 
}

checkoutCartProducts();
