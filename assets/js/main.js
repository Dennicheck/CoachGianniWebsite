function carouselPackagesNext() {
  carouselPackages = new bootstrap.Carousel("#carouselPackages");
  carouselPackages.next();
}

function carouselPackagesPrev() {
  carouselPackages = new bootstrap.Carousel("#carouselPackages");
  carouselPackages.prev();
}

function carouselRatingsNext() {
  carouselRatings = new bootstrap.Carousel("#carouselRatings");
  carouselRatings.next();
}

function carouselRatingsPrev() {
  carouselRatings = new bootstrap.Carousel("#carouselRatings");
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
