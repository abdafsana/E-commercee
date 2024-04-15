const wishList = document.querySelector(".wishList-body--cards");

const cartItems = JSON.parse(localStorage.getItem("cartItemsWishList")) || [];
async function displayWishListProducts() {
  const wishIds = cartItems.map((item) => item.wishId);
  console.log(wishIds);
  for (const wishId of wishIds) {
    const response = await fetch(`http://localhost:3000/product?id=${wishId}`);
    const product = await response.json();
    displayWishItems(product);
  }
}
displayWishListProducts();

document.querySelector(".wislist-ttl").innerHTML = `Wishlist (${
  JSON.parse(localStorage.getItem("cartItemsWishList")).length
})`;
function displayWishItems(product) {
  // wishList.innerHTML = "";
  product.forEach((item) => {
    wishList.innerHTML += `<div class="wishList-card--item">
    <div class="wishList-cardItem--body display__between">
      <div class="wishList-cardItem--header">
        <div class="wishList-percantage">
          <p>30%</p>
        </div>
        <div class="wishList-trashIcon display__com">
          <i class="fa-solid fa-trash-can" onclick="removeFromWishlist(this,${item.id})"></i>
        </div>
      </div>
      <img src="${item.images[0]}" alt="cart image" />
    </div>
    <div class="wishList-cardItem--footer display__com" onclick="addToCart(${item.id},'${item.images[0]}','${item.price}','${item.title}')">
      <i class="fa-solid fa-cart-shopping"></i>
      <p class="common-poppins wishList--cartIcon">Add To Cart</p>
    </div>
    <div class="wishList-cardItem--minifooter">
      <p class="poppins-font500">${item.title}</p>
      <p class="poppins-font500 wishList-miniFoot">${item.price}<span class="wishList-miniFoot--subtitle">${item.discount}</span></p>
    </div>              
  </div>`;
  });
}

function removeFromWishlist(iconElement, productId) {
  const cartItems = JSON.parse(localStorage.getItem("cartItemsWishList")) || [];

  const updatedWishlist = cartItems.filter((item) => item.wishId !== productId);
  localStorage.setItem("cartItemsWishList", JSON.stringify(updatedWishlist));

  const cardItem =
    iconElement.parentElement.parentElement.parentElement.parentElement;
  cardItem.remove();

  const wishCountElement = document.querySelector(".wislist-ttl");
  wishCountElement.textContent = `Wishlist (${updatedWishlist.length})`;
  const wishCountElements = document.querySelector(".cart-counts");
  localStorage.setItem("wishCnt", updatedWishlist.length);
}
