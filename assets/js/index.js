const filter = document.querySelector(".filter-lists");
const cards = document.querySelector(".card-items");

let allData;
function getProducts() {
  fetch("http://localhost:3000/product")
    .then((res) => res.json())
    .then((data) => {
      repeatProduct(data);
      allData = data;
    });
}
getProducts();

// fetch("http://localhost:3000/category")
//   .then((res) => res.json())
//   .then((data) => {filterList(data)
//   });

function filterList(list) {
  list.forEach((item) => {
    filter.innerHTML += `<li class="filter-list--item common-poppins__text"><a href="#">${item.name}</a></li>`;
  });
}

function repeatProduct(products) {
  cards.innerHTML = " ";
  products.forEach(function (product) {
    cards.innerHTML = `   <div class="card-item">
    <div class="card-item--body display__between">
      <div class="cardItem-header">
        <div class="card-percantage">
          <!-- <p>asdcvb</p> -->
        </div>
        <div class="card-Icons">
          <div class="card-Icon display__com">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-Icon display__com">
          <i class="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>
      <img src=${product.images[0]} alt="cart image" />
    </div>
    <div class="card-item--footer display__com">
      <i class="fa-solid fa-cart-shopping"></i>
      <p class="common-poppins  card--cartIcon">Add To Cart</p>
    </div>
    <div class="card-item--minifooter">
      <p class="poppins-font500">${product.title}</p>
      <p class="poppins-font500 wishList-miniFoot">$${product.price}<span class="wishList-miniFoot--subtitle">$${product.discount}</span></p>
      <div class="star-icons">
        <div class="star-icon--div">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <span class="poppins-font600 count">(65)</span>
      </div>
    </div>              
  </div>`;
  });
}
