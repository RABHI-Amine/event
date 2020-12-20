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
  if (getWidth() <= 800) {
    cards.style.display = "none";
  } else {
    cards.style.display = "flex";
  }
}
widthTester();
window.addEventListener("resize", function () {
  console.log(getWidth());
  widthTester();
})();
