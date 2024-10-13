import Swiper from "swiper";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousel = document.querySelector(".reviews-list");

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nav-arrow-next",
    prevEl: ".nav-arrow-prev",
  },
});

handleViewportChange();
window.addEventListener("resize", handleViewportChange);

const response = await axios.get(
  "https://portfolio-js.b.goit.study/api/reviews"
);

carousel.insertAdjacentHTML("beforeend", await createMarkup(response));

async function createMarkup(reviews) {
  try {
    return reviews.data
      .map((comment) => {
        const { author, avatar_url, review } = comment;
        return `
        <li class="swiper-slide reviews-wrap">
        <div class="reviews-item">
        <p class="reviews-text">${review}</p>
        <div class="reviews-credentials">
          <img class="reviews-img" src="${avatar_url}" />
          <p class="reviews-author">${author}</p>
          </div>
        </div>
      </li>`;
      })
      .join("");
  } catch (error) {
    console.log(error);
  }
}

function handleViewportChange() {
  const currentWidth = window.innerWidth;
  if (currentWidth < breakpoints.tablet) {
    swiper.params.slidesPerView = 1;
    swiper.update();
    console.log("mobile");

    // Mobile layout
  } else if (
    currentWidth > breakpoints.tablet &&
    currentWidth < breakpoints.desktop
  ) {
    swiper.params.slidesPerView = 1;
    swiper.update();
    console.log("tablet");

    // Tablet layout
  } else {
    // Desktop layout
    swiper.params.slidesPerView = 2;
    swiper.params.spaceBetween = 24;
    swiper.update();
    console.log("desktop");
  }
}
