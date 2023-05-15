const carouselPackages = new bootstrap.Carousel("#carouselPackages");

function carouselPackagesNext() {
  carouselPackages.next();
}

function carouselPackagesPrev() {
  carouselPackages.prev();
}

const carouselRatings = new bootstrap.Carousel("#carouselRatings");

function carouselRatingsNext() {
  carouselRatings.next();
}

function carouselRatingsPrev() {
  carouselRatings.prev();
}

function switchButtonText(buttonId) {
  var button = document.getElementById(buttonId);
  if (button.innerText == "+") {
    button.innerText = "-";
  } else {
    button.innerText = "+";
  }
}
