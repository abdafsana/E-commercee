const filter = document.querySelector(".filter-lists");

fetch("http://localhost:3000/category")
  .then((res) => res.json())
  .then((data) => filterList(data));

function filterList(list) {
  list.forEach((item) => {
    filter.innerHTML += `<li class="filter-list--item common-poppins__text"><a href="#">${item.name}</a></li>`;
  });
}
