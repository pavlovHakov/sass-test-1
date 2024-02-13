const slider = document.querySelector(".slider-container");
const img = document.querySelectorAll(".block-img");
const markers = document.querySelectorAll(".marker");
let index = 0;

const interval = setInterval(function () {
  index += 1;
  if (index === img.length) {
    index = 0;
  }
  addMarker(index);

  slider.style.transform = `translate3d(${index * -370}px, 0, 0)`;
}, 3000);

// Маркеры
function addMarker(el) {
  for (let i = 0; i < markers.length; i++) {
    if (el === 0) {
      markers[i].classList.remove("active");
    }
    if (el === i) {
      markers[i].classList.add("active");
    }
  }
}
