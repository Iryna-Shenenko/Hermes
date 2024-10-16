import Swiper from "swiper";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "izitoast";
import iziToast from "izitoast";

const carousel = document.querySelector(".reviews-list");
const reviewsSection = document.querySelector("#reviews");
const prevButton = document.querySelector(".nav-arrow-prev");
const nextButton = document.querySelector(".nav-arrow-next");

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

let hasErrorOccurred = false;
let hasPopupBeenShown = false;

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nav-arrow-next",
    prevEl: ".nav-arrow-prev",
    enabled: true,
  },
  keyboard: {
    enabled: true,
  },
});

nextButton.addEventListener("click", () => {
  nextButton.blur();
});
prevButton.addEventListener("click", () => {
  prevButton.blur();
});

handleViewportChange();

async function fetchReviews() {
  try {
    const response = await axios.get(
      "https://portfolio-js.b.goit.study/api/reviews"
    );

    if (response.status === 200) {
      const markup = await createMarkup(response);
      carousel.insertAdjacentHTML("beforeend", markup);
      swiper.update();
    } else {
      hasErrorOccurred = true;
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    hasErrorOccurred = true;
  }
}

async function createMarkup(response) {
  return response.data
    .map((comment) => {
      const { author, avatar_url, review } = comment;
      return `
        <li class="swiper-slide reviews-wrap">
          <div class="reviews-item">
            <p class="reviews-text">${review}</p>
            <div class="reviews-credentials">
              <img class="reviews-img" src="${avatar_url}" alt="${author}" />
              <p class="reviews-author">${author}</p>
            </div>
          </div>
        </li>`;
    })
    .join("");
}

function checkIfInViewport() {
  const rect = reviewsSection.getBoundingClientRect();
  const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

  if (inViewport && hasErrorOccurred && !hasPopupBeenShown) {
    handleError("Not found");
    hasPopupBeenShown = true;
  }
}

function handleError(message) {
  // reviewsTitle.textContent = message;
  carousel.innerHTML = `<p class="not-found">${message}</p>`;
  // alert("An error occurred while fetching reviews. Please try again later.");
  iziToast.show({
    message: `❌ Sorry, due to an error no reviews were fetched.`,
    position: "topRight",
    backgroundColor: "#F44336",
    messageColor: "#fff",
  });
}

window.addEventListener("scroll", checkIfInViewport);

fetchReviews();

function handleViewportChange() {
  const currentWidth = window.innerWidth;
  if (currentWidth < breakpoints.tablet) {
    //mobile
    swiper.params.slidesPerView = 1;
  } else if (
    currentWidth > breakpoints.tablet &&
    currentWidth < breakpoints.desktop
  ) {
    //tablet
    swiper.params.slidesPerView = 1;
  } else {
    //desktop
    swiper.params.slidesPerView = 2;
    swiper.params.spaceBetween = 24;
  }
  swiper.update();
}

document
  .querySelector(".nav-arrow-prev")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      swiper.slidePrev();
    }
  });

document
  .querySelector(".nav-arrow-next")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      swiper.slideNext();
    }
  });

window.addEventListener("resize", handleViewportChange);
