
const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierE1 = document.querySelector(".magnifier");

magnifierE1.addEventListener("click", () =>{
    searchBarContainerEl.classList.toggle("active");
});
