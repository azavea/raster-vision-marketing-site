const heroTextAndImage = [
  {
    text: "measuring traffic density_",
    src: "images/hero-trafficdensity.jpg",
    alt: "Traffic on a highway interchange",
  },
  {
    text: "understanding crop health_",
    src: "images/hero-crophealth2.jpg",
    alt: "Aerial view of fields of crops",
  },
  {
    text: "tracking forest loss_",
    src: "images/hero-forestloss.jpg",
    alt: "Color-coded map reflecting forest loss",
  },
  {
    text: "cell nuclei detection_",
    src: "images/placeholder.svg",
    alt: "Close up of a cell nucleus",
  },
  {
    text: "forecasting rip currents_",
    src: "images/hero-ripcurrents.jpg",
    alt: "Aerial view of a hurricane",
  },
  {
    text: "prediction of hourly global solar irradiation_",
    src: "images/hero-solarirradiation.jpg",
    alt: "Satellite imagery of a solar farm",
  },
  {
    text: "assessing storm damage_",
    src: "images/hero-stormdamage.jpg",
    alt: "A flooded suburban neighborhood",
  },
];

function changeHeroTextAndImage(moveForward) {
  // find visible image id
  const currentImgElem = document.getElementsByClassName("primary")[0];
  const currentIndex = parseInt(currentImgElem.id.split("-")[2]);
  // determine direction and then use mod operator to wrap if needed
  const increment = moveForward ? 1 : -1;
  const nextIndex =
    (currentIndex + increment + heroTextAndImage.length) %
    heroTextAndImage.length;
  // get second slot for setting new image and fade in
  const nextImgElem = document.getElementsByClassName("secondary")[0];
  nextImgElem.id = `hero-img-${nextIndex}`;
  nextImgElem.src = heroTextAndImage[nextIndex].src;
  nextImgElem.alt = heroTextAndImage[nextIndex].alt;
  $(`#hero-img-${nextIndex}`).fadeIn();
  // remove current image after addition to prevent flickering
  $(`#hero-img-${currentIndex}`).fadeOut();
  // switch primary and secondary slots
  nextImgElem.classList.add("primary");
  nextImgElem.classList.remove("secondary");
  currentImgElem.classList.add("secondary");
  currentImgElem.classList.remove("primary");
  // replace hero text to match new slide
  const textElem = document.getElementById("hero-text");
  textElem.innerText = heroTextAndImage[nextIndex].text;
}
