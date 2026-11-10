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
      //hvis der er en åben
      console.log(openDetails.dataset.position);

      svgFrekvens.dataset.position = openDetails.dataset.position;
    } else {
      //hvis der ikke er nogen åben
      delete svgFrekvens.dataset.position;
    }
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

/* artister fade in */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".artist-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(cards).indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 250);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

//scroll indikator
const scrollIndikator = document.querySelector(".scroll-indikator");

window.addEventListener("scroll", () => {
  if (scrollIndikator) {
    scrollIndikator.style.opacity = window.scrollY > 100 ? "0" : "1";
  }
});

document
  .querySelector(".scroll-indikator")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector("#cards").scrollIntoView({
      behavior: "smooth",
    });
  });

//logo parallax

window.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo-hero");

  if (!logo) return;

  const scrollPosition = window.scrollY;
  const speed = 0.25; // Lower value = slower movement

  logo.style.transform = `translateY(${scrollPosition * speed}px)`;
});
