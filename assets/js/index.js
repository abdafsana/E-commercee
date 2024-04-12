const filter = document.querySelector(".filter-lists");
const cards = document.querySelector(".card-items");

let allData;
let current_page = 1;
let rows_per_page = 8;
let page_count;

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/product");
    const data = await res.json();
    allData = data;
    page_count = Math.ceil(allData.length / rows_per_page);
    displayList(allData, rows_per_page, current_page);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

getProducts();

function displayList(items, rows_per_page, page) {
  cards.innerHTML = "";

  let start = (page - 1) * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => {
    cards.innerHTML += `<div class="card-item">
    <div class="card-item--body display__between">
      <div class="cardItem-header">
        <div class="card-percantage"></div>
        <div class="card-Icons">
          <div class="card-Icon display__com">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-Icon display__com">
          <i class="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>
      <a href="./productDetail.html?id=${item.id}">
      <img class="card-img" src=${item.images[0]} alt="cart image" />
      </a>
    </div>
    <div class="card-item--footer display__com" onclick="addToCart(${item.id})">
    <i class="fa-solid fa-cart-shopping"></i>
    <p class="common-poppins card--cartIcon">Add To Cart</p>
    </div>
    <div class="card-item--minifooter">
      <p class="poppins-font500 card-title">${item.title}</p>
      <p class="poppins-font500 wishList-miniFoot">$${item.price}<span class="wishList-miniFoot--subtitle">${item.discount}</span></p>
      <div class="star-icons">
        <div class="star-icon--div">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </div>              
  </div>`;
  });
}
// Next Page
function nextPage() {
  if (current_page < page_count) {
    current_page++;
    displayList(allData, rows_per_page, current_page);
  }
}
// Prev Page
function prevPage() {
  if (current_page > 1) {
    current_page--;
    displayList(allData, rows_per_page, current_page);
  }
}






fetch("http://localhost:3000/category")
  .then((res) => res.json())
  .then((data) => {
    filterList(data);
  });

// Create Category
function filterList(list) {
  list.forEach((item) => {
    filter.innerHTML += `<li class="filter-list--item common-poppins__text"><a href="#">${item.name}</a></li>`;
  });
}







// Basket add
// let productId = new URLSearchParams(window.location.search).get("id");
// function addToCart(productId) { 

//   let cartItems = JSON.parse(localStorage.getItem('cartItems'));
//   // cartItems.push(productId);

//   const cardCount = document.querySelector(".cart-count");
//   cardCount.style.opacity = "1";

//   const cartCountElement = document.getElementById('cart-count');
//   let currentCount = parseInt(cartCountElement.textContent) || 0;
//   currentCount++;
  
//   cartCountElement.textContent = currentCount;

//   localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   // window.location.href = `cart.html?id=${productId}`;
  
// }






function addToCart(productId) {
    const cardCount = document.querySelector(".cart-count");
  cardCount.style.opacity = "1";

  const cartCountElement = document.getElementById('cart-count');
  let currentCount = parseInt(cartCountElement.textContent) || 0;
  currentCount++;
  
  cartCountElement.textContent = currentCount;

  // Ürün ID'sini sepete eklemek için
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Sepete eklenen ürünler listesine yeni ürünü ekle
  cartItems.push(productId);

  // Güncellenmiş sepet listesini localStorage'e kaydet
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

let productId = new URLSearchParams(window.location.search).get("id");
function cardPage(productId){
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  window.location.href = `cart.html?id=${productId}`;
}








const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const targetTime = new Date();
targetTime.setDate(targetTime.getDate() + 10);
function updateTime() {
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  day.textContent = days.toString().padStart(2, "0");
  hour.textContent = hours.toString().padStart(2, "0");
  minute.textContent = minutes.toString().padStart(2, "0");
  second.textContent = seconds.toString().padStart(2, "0");
}
updateTime();

setInterval(updateTime, 1000);




