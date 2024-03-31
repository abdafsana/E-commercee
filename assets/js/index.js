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

fetch("http://localhost:3000/category")
  .then((res) => res.json())
  .then((data) => {filterList(data)
  });

function filterList(list) {
  list.forEach((item) => {
    filter.innerHTML += `<li class="filter-list--item common-poppins__text"><a href="#">${item.name}</a></li>`;
  });
}

function repeatProduct(products) {
  cards.innerHTML += " ";
  products.forEach(function (product) {
    // console.log(product.images[0])
    // for(let i=0;i<=4;i++){
      cards.innerHTML += `<div class="card-item">
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
          <span class="poppins-font600 count">(${product.stock})</span>
        </div>
      </div>              
    </div>`;
    // }
    
  });
}
  


// Swiper'ı başlatın

// function chunkArray(arr, chunkSize) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     chunks.push(arr.slice(i, i + chunkSize));
//   }
//   return chunks;
// }


// function repeatProduct(products) {
//   cards.innerHTML = ''; // cards içeriğini temizle

//   // Slayt sayısını ve her bir slaytta gösterilecek ürün sayısını belirleyin
//   const slidesPerView = 4; // Her slaytta gösterilecek ürün sayısı
//   const totalSlides = Math.ceil(products.length / slidesPerView); // Toplam slayt sayısı

//   // Slaytları oluşturun
//   for (let i = 0; i < totalSlides; i++) {
//     const slideProducts = products.slice(i * slidesPerView, (i + 1) * slidesPerView);

//     const slideHTML = slideProducts.map(product => `
//       <div class="swiper-slide">
//         <div class="card-item">
//           <div class="card-item--body display__between">
//             <div class="cardItem-header">
//               <div class="card-percantage">
//                 <!-- <p>asdcvb</p> -->
//               </div>
//               <div class="card-Icons">
//                 <div class="card-Icon display__com">
//                   <i class="fa-regular fa-heart"></i>
//                 </div>
//                 <div class="card-Icon display__com">
//                   <i class="fa-regular fa-eye"></i>
//                 </div>
//               </div>
//             </div>
//             <img src="${product.images[0]}" alt="cart image" />
//           </div>
//           <div class="card-item--footer display__com">
//             <i class="fa-solid fa-cart-shopping"></i>
//             <p class="common-poppins  card--cartIcon">Add To Cart</p>
//           </div>
//           <div class="card-item--minifooter">
//             <p class="poppins-font500">${product.title}</p>
//             <p class="poppins-font500 wishList-miniFoot">$${product.price}<span class="wishList-miniFoot--subtitle">$${product.discount}</span></p>
//             <div class="star-icons">
//               <div class="star-icon--div">
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//               </div>
//               <span class="poppins-font600 count">(${product.stock})</span>
//             </div>
//           </div> 
//         </div>
//       </div>
//     `).join('');

//     // Oluşturulan slayt HTML'ini cards içeriğine ekleyin
//     cards.innerHTML += `
//       <div class="swiper-container card-slider">
//         <div class="swiper-wrapper">
//           ${slideHTML}
//         </div>
//         <div class="swiper-pagination"></div>
//       </div>
//     `;
//   }

//   // Swiper'ı başlatın
//   const sliders = document.querySelectorAll('.card-slider');
//   sliders.forEach(slider => {
//     new Swiper(slider, {
//       direction: 'horizontal', // Yatay yönde kaydırma
//       slidesPerView: 4, // Her slaytta bir kart göster
//       loop: true,
//       grabCursor: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   });
// }







// function repeatProduct(products) {
//     cards.innerHTML += " ";
//     products.forEach(function (product) {
//       // console.log(product.images[0])
//       cards.innerHTML += `<div class="card-item">
//       <div class="card-item--body display__between">
//         <div class="cardItem-header">
//           <div class="card-percantage">
//             <!-- <p>asdcvb</p> -->
//           </div>
//           <div class="card-Icons">
//             <div class="card-Icon display__com">
//             <i class="fa-regular fa-heart"></i>
//           </div>
//           <div class="card-Icon display__com">
//             <i class="fa-regular fa-eye"></i>
//             </div>
//           </div>
//         </div>
//         <img src=${product.images[0]} alt="cart image" />
//       </div>
//       <div class="card-item--footer display__com">
//         <i class="fa-solid fa-cart-shopping"></i>
//         <p class="common-poppins  card--cartIcon">Add To Cart</p>
//       </div>
//       <div class="card-item--minifooter">
//         <p class="poppins-font500">${product.title}</p>
//         <p class="poppins-font500 wishList-miniFoot">$${product.price}<span class="wishList-miniFoot--subtitle">$${product.discount}</span></p>
//         <div class="star-icons">
//           <div class="star-icon--div">
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//           </div>
//           <span class="poppins-font600 count">(${product.stock})</span>
//         </div>
//       </div>              
//     </div>`;
//     });

//   const chunkedProducts = chunkArray(products, 4); // Ürünleri 4'lü gruplara ayır

//   chunkedProducts.forEach((chunk, index) => {
//     cards.innerHTML += `<div class="swiper-container card-slider" id="slider${index}">
//       <div class="swiper-wrapper">
//         ${chunk.map(product => `<div class="swiper-slide">
//           <div class="card-item">
//             <!-- card-item content -->
//           </div>
//         </div>`).join('')}  
//       </div>
//       <div class="swiper-pagination"></div>
//     </div>`;
    
//     new Swiper(`#slider${index}`, {
//       slidesPerView: 1,
//       loop: false,
//       grabCursor: true,
//       pagination: {
//         el: `.swiper-pagination`,
//         clickable: true,
//       },
//     });
//   });
// }





// var swiper = new Swiper(".card-item", {
//   slidesPerView: 1,
//   loop: true,
//   centerSlide: true,
//   fade: true,
//   grabCursor: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".fa-arrow-right",
//     prevEl: ".fa-arrow-left",
//   },
// });


// var swiper = new Swiper(".card-items", {
//   slidesPerView: 1,
//   loop: true,
//   centerSlide:'true',
//   fade: 'true',
//   grabCursor: 'true',
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 70,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".fa-arrow-right",
//     prevEl: ".fa-arrow-left",
//   },
// });
// console.log(swiper)
