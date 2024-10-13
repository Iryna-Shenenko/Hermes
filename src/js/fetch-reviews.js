import Swiper from "swiper";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousel = document.querySelector(".reviews-list");

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nav-arrow-next",
    prevEl: ".nav-arrow-prev",
  },
});

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
        <li class="swiper-slide">
        <div class="review-item">
        <p class="review-text">${review}</p>
        <div class="review-credentials">
          <img class="review-img" src="${avatar_url}" />
          <p class="review-author">${author}</p>
          </div>
        </div>
      </li>`;
      })
      .join("");
  } catch (error) {
    console.log(error);
  }
}

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

function handleViewportChange() {
  const currentWidth = window.innerWidth;
  if (currentWidth < breakpoints.mobile) {
    swiper.params.slidesPerView = 1;
    // Mobile layout
  } else if (currentWidth < breakpoints.tablet) {
    swiper.params.slidesPerView = 1;
    // Tablet layout
  } else if (currentWidth > breakpoints.desktop) {
    // Desktop layout
    swiper.params.slidesPerView = 2;
    swiper.update();
  }
}

window.addEventListener("resize", handleViewportChange);
