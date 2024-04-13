const detailContainer = document.querySelector(
  ".productDetail-common--container"
);

async function fetchData() {
  let productId = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(
      "http://localhost:3000/product?id=" + productId
    );
    const data = await response.json();
    repeatDetailProduct(data);

}

fetchData();

function repeatDetailProduct(product) {
  detailContainer.innerHTML = "";

  product.forEach(function (item) {

    const colors = item.color; 
    const colorDivs = colors.map((color) => {
      return `<div class="color-box" style="background-color: ${color};"></div>`;
    });
    
    const sizes = item.size;
    const sizeOptions = sizes.map((size) => {
      return `<p class="size poppins-font_14 display__com">${size}</p>`;
    });

    detailContainer.innerHTML += `<div class="productDetail-container--left display__com">
        <ul class="productDetail-lists">
          <li class="productDetail-list--item display__com">
            <img src=${item.images[1]} alt="json file image" />
          </li>
          <li class="productDetail-list--item display__com">
            <img src=${item.images[2]} alt="json file image" />
          </li>
          <li class="productDetail-list--item display__com">
            <img src=${item.images[3]} alt="json file image" />
          </li>
        </ul>
        <div class="productDetail-greatProduct">
          <div class="greatProduct-image">
            <img src=${item.images[0]} alt="json file image" />
          </div>
        </div>
      </div>
      <div class="productDetail-container--right">
        <div class="product-header">
          <h5 class="product-name inter-font-24">${item.title}</h5>
          <div class="product-voting display__between">
            <div class="star-icon--div div-star--icons">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="poppins-font14 reviews">(150 Reviews)</span>
            </div>
            <p class="instock poppins-font14">${item.stock}</p>
          </div>
          <p class="product-price inter-font400">$${item.price}</p>
          <p class="product-descrition poppins-font14">
          ${item.description}
          </p>
        </div>
        <div class="product-body">
          <div class="product-color">
            <p class="inter-font20">Colours:</p>
            <div class="colors">
            ${colorDivs.join("")}
            </div>
          </div>
          <div class="product-size">
            <p class="inter-font20">Size:</p>
            <div class="size-div display__com">
              ${sizeOptions.join("")}
            </div>
          </div>
          <div class="product-count display__between">
            <div class="count-btn display__com">
              <div class="cnt-btn btn1 display__com">
                <i class="fa-solid fa-minus"></i>
              </div>
              <div class="counts display__com poppins-font20">1</div>
              <div class="cnt-btn btn2 display__com">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <a href="./checkOut.html"
              class="product-btn buy-btn form-button__create poppins-font500 display__com"
            >
              Buy Now
            </a>
            <div class="product-heart display__com">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="product-footer">
          <ul class="product-footer--list">
            <li class="product-list--item lst-item1">
              <div class="list-div">
                <i class="fa-solid fa-truck-fast delivery-truck"></i>
                <div class="list-div--about">
                  <p class="poppins-font500">Free Delivery</p>
                  <a href="#" class="delivery-link poppins-font12"
                    >Enter your postal code for Delivery Availability</a
                  >
                </div>
              </div>
            </li>
            <li class="product-list--item lst-item2">
              <div class="list-div">
                <i class="fa-solid fa-arrows-rotate"></i>
                <div class="list-div--about">
                  <p class="poppins-font500">Return Delivery</p>
                  <p class="poppins-font12">
                    Free 30 Days Delivery Returns.
                    <a href="#" class="delivery-link">Details</a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>`;
  });
}
