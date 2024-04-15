const filter = document.querySelector(".filter-lists");
const cards = document.querySelector(".card-items");

let allData;
let current_page = 1;
let rows_per_page = 8;
let page_count;

async function getProducts() {
    const res = await fetch("http://localhost:3000/product");
    const data = await res.json();
    allData = data;
    page_count = Math.ceil(allData.length / rows_per_page);
    displayList(allData, rows_per_page, current_page);
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
        <div href="#" class="card-percantage display__com">${item.percent}</div>
        <div class="card-Icons">
          <div class="card-Icon display__com" onclick="wishList(${item.id},'${item.images[0]}','${item.price}','${item.title}')">
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
    <div class="card-item--footer display__com" onclick="addToCart(${item.id},'${item.images[0]}','${item.price}','${item.title}')">
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
    filter.innerHTML += `<li class="filter-list--item common-poppins__text"><a href="./error.html">${item.name}</a></li>`;
  });
}

function addToCart(id, images, title, price) {
  let cartItemsBasket =
    JSON.parse(localStorage.getItem("cartItemsBasket")) || [];
  const cartCountElement = document.getElementById("cart-count");
  let basketProducts = {
    productId: id,
    productImg: images,
    productTitle: title,
    productPrice: price,
  };
  cartItemsBasket.push(basketProducts);
  console.log(cartItemsBasket);
  localStorage.setItem("cartItemsBasket", JSON.stringify(cartItemsBasket));

  let currentCount = parseInt(cartCountElement.textContent) || 0;
  currentCount++;

  cartCountElement.textContent = currentCount;
  localStorage.setItem("basketCount", currentCount);
}

function wishList(id, images, title, price) {
  let wishListItems =
    JSON.parse(localStorage.getItem("cartItemsWishList")) || [];

  if (!Array.isArray(wishListItems)) {
    wishListItems = [];
  }

  const wishCountElement = document.querySelector(".cart-counts");
  const wishListProduct = {
    wishId: id,
    wishImg: images,
    wishTitle: title,
    wishPrice: price,
  };

  wishListItems.push(wishListProduct);
  console.log(wishListItems);

  localStorage.setItem("cartItemsWishList", JSON.stringify(wishListItems));

  let wishCount = parseInt(wishCountElement.innerHTML) || 0;
  wishCount++;
  wishCountElement.textContent = wishCount;
  localStorage.setItem("wishCnt", wishCount);
}

// Today's Section
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

// Addition Section
const div_day = document.querySelector(".div-day");
const div_hour = document.querySelector(".div-hour");
const div_minute = document.querySelector(".div-minutes");
const div_second = document.querySelector(".div-seconds");

const AtargetTime = new Date();
AtargetTime.setDate(AtargetTime.getDate() + 10);
function updateTimes() {
  const currentTime = new Date();
  const timeDifference = AtargetTime - currentTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  div_day.textContent = days.toString().padStart(2, "0");
  div_hour.textContent = hours.toString().padStart(2, "0");
  div_minute.textContent = minutes.toString().padStart(2, "0");
  div_second.textContent = seconds.toString().padStart(2, "0");
}
updateTimes();

setInterval(updateTimes, 1000);

// SWIPER SLIDER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// localStorage.getItem("loggedInUser")
// const navbarUser = document.querySelector(".navbar-user");
// if (navbarUser) {
//   navbarUser.style.display = "block";
// }
