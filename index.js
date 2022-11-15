const heroText = [
  "measuring traffic density_",
  "understanding crop health_",
  "tracking forest loss_",
  "cell nuclei detection_",
  "forecasting rip currents_",
  "prediction of hourly global solar irradiation_",
  "assessing storm damage_",
];

function changeHeroTextAndImage(moveForward) {
  // find visible image id
  const currentImgElem = document.getElementsByClassName("in-view")[0];
  const currentIndex = parseInt(currentImgElem.id.split("-")[2]);
  // restart from start or end and move left or right
  const nextIndex =
    moveForward && currentIndex == heroText.length - 1
      ? 0
      : !moveForward && currentIndex == 0
      ? heroText.length - 1
      : moveForward
      ? currentIndex + 1
      : !moveForward
      ? currentIndex - 1
      : 0;
  // get and show next image
  const nextImgElem = document.getElementById(`hero-img-${nextIndex}`);
  nextImgElem.classList.add("in-view");
  fadeIn(nextImgElem);
  // remove current image after addition to prevent flickering
  currentImgElem.classList.remove("in-view");
  fadeOut(currentImgElem);
  // replace hero text to match new slide
  const textElem = document.getElementById("hero-text");
  textElem.innerText = heroText[nextIndex];
}

function fadeOut(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function fadeIn(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}
