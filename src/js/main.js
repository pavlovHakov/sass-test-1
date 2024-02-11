import "../scss/style.scss";

const footerBlock = document.querySelector(".footer-block__text");
const footerCnp = document.getElementById("footer-cnp");

footerCnp.addEventListener("click", function () {
  if (this.textContent === "Read less") {
    footerBlock.classList.toggle("footer-height");
    this.textContent = "Read more";
  } else if (this.textContent === "Read more") {
    footerBlock.classList.toggle("footer-height");
    this.textContent = "Read less";
  }
});

const arrow = document.querySelector(".free-shipping__img");
const block = document.querySelector(".footnote__block");

arrow.addEventListener("click", function () {
  block.classList.toggle("hide-footnote");
  this.classList.toggle("arrow-rotate");
});

const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__show");
const blockNav = document.querySelector(".header-show");

menu.addEventListener("click", function () {
  blockNav.classList.add('nav-show');
});

menuShow.addEventListener("click", function () {
  blockNav.classList.remove("nav-show");
});

const cnp = document.querySelector(".cnp");
const order = document.querySelector(".confirmation__order");
const img_delete = document.querySelector(".block__img-delete");

cnp.addEventListener('click', function(){
  order.classList.add('show-order');
})

img_delete.addEventListener("click", function() {
	order.classList.remove('show-order');
})
