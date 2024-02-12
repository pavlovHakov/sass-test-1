const slider = document.querySelector(".slider-container");
const img = document.querySelectorAll(".block-img");
const markers = document.querySelectorAll(".marker");

let index = 0;

setInterval(function () {
  index += 1;
  if (index === img.length) {
    index = 0;
  }
  slider.style.transform = `translate3d(${index * -370}px, 0, 0)`;
}, 3000);

