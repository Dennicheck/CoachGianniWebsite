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

function showP(pId, buttonId) {
  var text = document.getElementById(pId);
  var button = document.getElementById(buttonId);
  if (text.style.display == "none") {
    text.style.display = "block";
    button.innerText = "-";
  } else {
    text.style.display = "none";
    button.innerText = "+";
  }
}
