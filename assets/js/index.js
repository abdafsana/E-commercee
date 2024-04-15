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
    page_count1 = Math.ceil(allData.length / rows_per_page1);
    displayList(allData, rows_per_page, current_page);
    bestSellingProduct(allData,rows_per_page1, current_page1)
    flashProduct(allData,rows_per_page1, current_page1)
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


let current_page1 = 1;
let rows_per_page1 = 4;
let page_count1;
// Best Selling Product
const bestSelling=document.querySelector(".bestSelling-card");
function bestSellingProduct(items,rows_per_page1,page){
  bestSelling.innerHTML="";
  let start = (page - 1) * rows_per_page;
  let end = start + rows_per_page1;
  let paginatedItems = items.slice(start, end);
  paginatedItems.forEach((product)=>{
    bestSelling.innerHTML +=` <div class="card-item">
    <div class="card-item--body display__between">
      <div class="cardItem-header">
        <div class="card-percantage"></div>
        <div class="card-Icons">
          <div class="card-Icon display__com" onclick="wishList(${product.id},'${product.images[0]}','${product.price}','${product.title}')">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-Icon display__com">
          <i class="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>
      <a href="./productDetail.html">
      <img src=${product.images[0]} alt=${product.title} />
      </a>
    </div>
    <div class="card-item--footer display__com" onclick="addToCart(${product.id},'${product.images[0]}','${product.price}','${product.title}')">
      <i class="fa-solid fa-cart-shopping"></i>
      <p class="common-poppins  card--cartIcon">Add To Cart</p>
    </div>
    <div class="card-item--minifooter">
      <p class="poppins-font500 card-title">${product.title}</p>
      <p class="poppins-font500 wishList-miniFoot">$${product.price}</p>
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
  </div>`
  })
}


// Flash Product
const flashProductList=document.querySelector(".today-card")
function flashProduct(items, rows_per_page1, page) {
  flashProductList.innerHTML = "";


  items.sort((a, b) => b.price - a.price);

  let start = (page - 1) * rows_per_page1;
  let end = start + rows_per_page1;
  let paginatedItems = items.slice(start, end);

  paginatedItems.forEach((product) => {
    flashProductList.innerHTML += ` 
      <div class="card-item">
        <div class="card-item--body display__between">
          <div class="cardItem-header">
            <div class="card-percantage"></div>
            <div class="card-Icons">
              <div class="card-Icon display__com" onclick="wishList(${product.id},'${product.images[0]}','${product.price}','${product.title}')">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div class="card-Icon display__com">
                <i class="fa-regular fa-eye"></i>
              </div>
            </div>
          </div>
          <a href="./productDetail.html">
            <img src=${product.images[0]} alt=${product.title} />
          </a>
        </div>
        <div class="card-item--footer display__com" onclick="addToCart(${product.id},'${product.images[0]}','${product.price}','${product.title}')">
        <i class="fa-solid fa-cart-shopping"></i>
        <p class="common-poppins  card--cartIcon">Add To Cart</p>
      </div>
        <div class="card-item--minifooter">
          <p class="poppins-font500 card-title">${product.title}</p>
          <p class="poppins-font500 wishList-miniFoot">$${product.price}</p>
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


// Next Page1
function nextPage1() {
  if (current_page1 < page_count1) {
    current_page1++;
    bestSellingProduct(allData, rows_per_page1, current_page1);
  }
}
function nextPage2() {
  if (current_page1 < page_count1) {
    current_page1++;
    flashProduct(allData, rows_per_page1, current_page1);
  }
}
// Prev Page1
function prevPage1() {
  if (current_page1 > 1) {
    current_page1--;
    bestSellingProduct(allData, rows_per_page1, current_page1);
  }
}
function prevPage2() {
  if (current_page1 > 1) {
    current_page1--;
    flashProduct(allData, rows_per_page1, current_page1);
  }
}
