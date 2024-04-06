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
    <a href="./cart.html" class="card-item--footer display__com" onclick="addCardProduct('${item.images[0]}','${item.title}',${item.price})">
    <i class="fa-solid fa-cart-shopping"></i>
    <p class="common-poppins  card--cartIcon">Add To Cart</p>
    </a>
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

// Create Card
function repeatProduct(products) {
  
  products.forEach(function (product) {
   
  });
}

// const icon = document.querySelector(".card-item--footer");

// icon.addEventListener("click", function () {
//   localStorage.setItem("cartIcon", icon.outerHTML);
//   alert("fcgvhbjnkm");
// });

// const cartContainer = document.querySelector(".card-item--footer");
// const savedIcon = localStorage.getItem("cartIcon");
// cartContainer.innerHTML += savedIcon;

// Flash Sale

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

const cardProductContainer = document.querySelector(".card-list--body");
// console.log(cardProductContainer);

function addCardProduct(img, title, price) {
  // console.log(img, title, price)
  cardProductContainer.innerHTML += `
    <li class="card-list--item">
              <div class="list-div common__display">
                <div class="list-div--header list-div--item common__display">
                  <img src=${img} alt=${title} />
                  <p class="common-poppins__text">${title}</p>
                </div>
                <div class="list-div--price list-div--item display__com">
                  <p class="common-poppins__text">$${price}</p>
                </div>
                <div class="list-div--count list-div--item display__com">
                  <div class="count-div display__com">
                    <p class="common-poppins__text">01</p>
                    <div class="count-upDown">
                      <i class="fa-solid fa-chevron-up"></i>
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <div class="list-div--subtotal list-div--item display__com">
                  <p class="common-poppins__text">$650</p>
                </div>
              </div>
            </li>
    `;
}

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", function (e) {
  let resultData = allData.filter(function (product) {
    let productTitle = product.title.toLowerCase();
    // console.log(productTitle);
    let searchTitleInput = e.target.value.toLowerCase();
    // console.log(searchTitleInput);
    // window.location.href = "#carditems";
    return productTitle.includes(searchTitleInput);
  });
  repeatProduct(resultData);
});
