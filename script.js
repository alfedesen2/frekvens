// Interaktiv SVG-side
const svgFrekvens = document.querySelector(".svg-frekvens");

if (svgFrekvens) {
  const bar = document.querySelector("#details-bar");
  const koncert = document.querySelector("#details-koncert");
  const merch = document.querySelector("#details-merch");

  bar.addEventListener("toggle", updateSvgPosition);
  koncert.addEventListener("toggle", updateSvgPosition);
  merch.addEventListener("toggle", updateSvgPosition);

  function updateSvgPosition() {
    console.log("updateSvgPosition");
    const openDetails = document.querySelector(".accordion-item:open");

    if (openDetails) {
      // hvis der en åben
      console.log(openDetails.dataset.position);

      svgFrekvens.dataset.position = openDetails.dataset.position;
    } else {
      delete svgFrekvens.dataset.position;
      // hvis der ingen åben
    }
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
