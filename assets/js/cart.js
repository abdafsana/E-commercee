const cartList = document.querySelector(".card-list--body");

async function displayCartProducts() {
  const cartItems = JSON.parse(localStorage.getItem("cartItemsBasket")) || [];
  const productIds = cartItems.map((item) => item.productId);
  console.log(productIds);
  for (const productId of productIds) {
    const response = await fetch(
      `http://localhost:3000/product?id=${productId}`
    );
    const product = await response.json();
    displayCartItems(product);
  }
}
displayCartProducts();

const subtotalElement = document.querySelector(".subtotal");

function displayCartItems(product) {
  // cartList.innerHTML += " ";
  product.forEach(function (item) {
    // console.log(item.id);
    cartList.innerHTML += `
        <li class="card-list--item">
                  <div class="list-div common__display">
                    <div class="list-div--header list-div--item">
                      <img src=${item.images[0]} alt=${item.title} />
                      <p class="common-poppins__text">${item.title}</p>
                    </div>
                    <div class="list-div--price list-div--item">
                      <p class="common-poppins__text">$${item.price}</p>
                    </div>
                    <div class="list-div--count list-div--item">
                      <input class="count-div" type="number" min="0" value="1" onchange="handleChange(this, '${item.price}')">
                    </div>
                    <div class="list-div--subtotal list-div--item">
                      <p class="common-poppins__text subtotal">${item.price}</p>
                    </div>
                  </div>
                </li>
                `;
  });
}

function handleChange(input, price) {
  const totalElement = input.parentElement.nextElementSibling.querySelector('.subtotal');
  const quantity = parseInt(input.value);
  const totalPrice = price * quantity;
  totalElement.textContent = `$${totalPrice.toFixed(2)}`;
  calculateSubtotal();
}

function calculateSubtotal() {
  let subtotal = 0;
  const subtotalElements = document.querySelectorAll('.subtotal');

  subtotalElements.forEach((subtotalElement) => {
    const subtotalValue = parseFloat(subtotalElement.textContent.replace('$', ''));
    subtotal += subtotalValue;
  });

  const subtotalDisplay = document.querySelector('.card-subtotal');

  if (subtotalDisplay) {
    subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  }
  const totalDisplay = document.querySelector('.card-total');
  totalDisplay.textContent=subtotalDisplay.textContent
}
