function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}
function widthTester() {
  var cards = document.getElementById("cards");
  var cardsMobile = document.getElementById("mobileCards");
  var fpnav = document.getElementsByClassName("fp-slidesNav");
  if (getWidth() <= 800) {
    cards.style.display = "none";
    for (i = 0; i < fpnav.length; i++) {
      fpnav[i].style.display = "inline-block";
    }
    cardsMobile.style.display = "flex";
  } else {
    cards.style.display = "flex";
    for (i = 0; i < fpnav.length; i++) {
      fpnav[i].style.display = "none";
    }
    cardsMobile.style.display = "none";
  }
}
widthTester();
window.addEventListener("resize", function () {
  console.log(getWidth());
  widthTester();
})();
