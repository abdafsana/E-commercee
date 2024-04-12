const cartList = document.querySelector(".card-list--body");

async function cardProducts() {
    let productId = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(
        "http://localhost:3000/product?id=" + productId
      );
  const data = await response.json();
  cartItems.push(data);
    displayCartItems(data);
}
cardProducts();

let cartItems = [];


function displayCartItems(product) {
    cartList.innerHTML ="";

    product.forEach(function(item) {
        console.log(item.id)
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
                      <div class="count-div display__com">
                        <p class="common-poppins__text product-count">${count}</p>
                        <div class="count-upDown">
                          <i class="fa-solid fa-chevron-up" onclick={increment()}></i>
                          <i class="fa-solid fa-chevron-down" onclick={decrement(${item.id})}></i>
                        </div>
                      </div>
                    </div>
                    <div class="list-div--subtotal list-div--item">
                      <p class="common-poppins__text subtotal">$${item.price}</p>
                    </div>
                  </div>
                </li>
        `;
       
    });
    calculateSubtotal()
}



let count=0;
function increment(productId) {
    const productCountElement = document.querySelector(".product-count");
  
        let count = parseInt(productCountElement.textContent) || 0;
        console.log(count)
        count++;
        productCountElement.textContent = count;
        calculateSubtotal(productId);
}

function decrement(productId) {
    const productCountElement = document.querySelector(".product-count");


        let count = parseInt(productCountElement.textContent) || 0;
        if (count > 0) {
            count--;
            productCountElement.textContent = count;
            calculateSubtotal(productId);
        }
}


let subtotal = 0;
function calculateSubtotal() {
    const countElement = document.querySelector(".product-count");
    const priceElement = document.querySelector(".list-div--price");
    const subtotalElement = document.querySelector(".subtotal");
    let count = parseInt(countElement.textContent) || 0;
    countElement.textContent = count;

    let price = parseFloat(priceElement.textContent.replace('$', '')) || 0;
    let subtotal = count * price;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
}
