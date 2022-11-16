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
  // determine direction and then use mod operator to wrap if needed
  const increment = moveForward ? 1 : -1;
  const nextIndex =
    (currentIndex + increment + heroText.length) % heroText.length;
  // get and show next image
  const nextImgElem = document.getElementById(`hero-img-${nextIndex}`);
  nextImgElem.classList.add("in-view");
  $(`#hero-img-${nextIndex}`).fadeIn();
  // remove current image after addition to prevent flickering
  currentImgElem.classList.remove("in-view");
  $(`#hero-img-${currentIndex}`).fadeOut();
  // replace hero text to match new slide
  const textElem = document.getElementById("hero-text");
  textElem.innerText = heroText[nextIndex];
}
