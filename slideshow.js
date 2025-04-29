const slideIds = [
  "#sliderImage1",
  "#sliderImage2",
  "#sliderImage3",
  "#sliderImage4",
];

function getCurrentIndex() {
  const currentHash = window.location.hash || "#sliderImage1";
  return slideIds.indexOf(currentHash);
}

document.getElementById("nextSlide").addEventListener("click", () => {
  const index = getCurrentIndex();
  const nextIndex = (index + 1) % slideIds.length;
  window.location.hash = slideIds[nextIndex];
});

document.getElementById("prevSlide").addEventListener("click", () => {
  const index = getCurrentIndex();
  const prevIndex = (index - 1 + slideIds.length) % slideIds.length;
  window.location.hash = slideIds[prevIndex];
});

window.addEventListener("load", () => {
  if (!window.location.hash || !slideIds.includes(window.location.hash)) {
    window.location.hash = "#sliderImage1";
  }
});
