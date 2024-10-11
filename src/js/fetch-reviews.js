import Swiper from "swiper";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousel = document.querySelector(".reviews-list");

new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
        return `<li class="swiper-slide">
  <p>${review}</p>
  <div>
  <img src="${avatar_url}">
  <p>${author}</p>
  </div>
  </li>`;
      })
      .join("");
  } catch (error) {
    console.log(error);
  }
}
