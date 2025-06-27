import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export class ImageCarousel extends HTMLElement {
  constructor() {
    super();
    this.swiper = null;
  }

  connectedCallback() {
    const images = [
      "/imgs/img1.jpg",
      "/imgs/img2.jpg",
      "/imgs/img3.jpg",
      "/imgs/img4.jpg",
    ];

    const slidesHTML = images
      .map(
        (src) =>
          `<div class="swiper-slide" style="background-image: url(${src})"></div>`
      )
      .join("");

    this.innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper">
          ${slidesHTML}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    `;

    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper(this.querySelector(".swiper"), {
      modules: [Navigation],
      slidesPerView: 1.1,
      spaceBetween: 8,

      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
      },

      navigation: {
        nextEl: this.querySelector(".swiper-button-next"),
        prevEl: this.querySelector(".swiper-button-prev"),
      },
    });

    this.swiper.on("slideChangeTransitionEnd", () => {
      const activeSlide = this.swiper.slides.find((slide) =>
        slide.classList.contains("swiper-slide-active")
      );
      console.log("Active slide:", activeSlide);
    });
  }
}

customElements.define("image-carousel", ImageCarousel);
