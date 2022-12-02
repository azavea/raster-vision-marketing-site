const heroTextAndImage = [
  {
    text: "measuring traffic density",
    src: "images/hero-trafficdensity.png",
    alt: "Traffic on a highway interchange",
  },
  {
    text: "understanding crop health",
    src: "images/hero-crophealth2.png",
    alt: "Aerial view of fields of crops",
  },
  {
    text: "tracking forest loss",
    src: "images/hero-forestloss.png",
    alt: "Color-coded map reflecting forest loss",
  },
  {
    text: "cell nuclei detection",
    src: "images/hero-nucleidetection.png",
    alt: "Close up of a cell nucleus",
  },
  {
    text: "forecasting rip currents",
    src: "images/hero-ripcurrents.png",
    alt: "Aerial view of a hurricane",
  },
  {
    text: "prediction of hourly global solar irradiation",
    src: "images/hero-solarirradiation.png",
    alt: "Satellite imagery of a solar farm",
  },
  {
    text: "assessing storm damage",
    src: "images/hero-stormdamage.png",
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
  textElem.innerText = "";
  typewriterEffect(textElem, heroTextAndImage[nextIndex].text);
}

function typewriterEffect(textElem, newText) {
  new Typewriter(textElem, {
    loop: false,
    autoStart: true,
    strings: newText,
    delay: 75,
    cursor: "_",
  });
}

let showHeader = false;
function evalHeaderOnChange() {
  const header = document.getElementById("header");
  const subHero = document.getElementById("subHero");
  // 64 px corresponds to h-16, 640 px corresponds to sm breakpoint
  const subHeroOffset = showHeader ? subHero.offsetTop - 64 : subHero.offsetTop;
  if (window.pageYOffset > subHeroOffset) {
    header.classList.remove("sm:hidden");
    showHeader = true;
  } else {
    header.classList.add("sm:hidden");
    showHeader = false;
  }
}
