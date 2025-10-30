import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import brandImage from "../assets/images/brand-1-1.svg";
import brandImage1 from "../assets/images/brand-1-2.svg";
import brandImage2 from "../assets/images/brand-1-3.svg";
import brandImage3 from "../assets/images/brand-1-4.svg";
import brandImage4 from "../assets/images/brand-1-5.svg";
import brandImage5 from "../assets/images/brand-1-6.svg";
function BrandCarousel() {
  return (
    <section className="brand-carousel">
      <div className="container">
        <Swiper
          className="brand-slider"
          modules={[Autoplay]}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage} alt="Brand 1" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage1} alt="Brand 2" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage2} alt="Brand 3" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage3} alt="Brand 4" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage4} alt="Brand 5" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage5} alt="Brand 6" width={140} height={140} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-item">
              <img src={brandImage1} alt="Brand 2" width={140} height={140} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default BrandCarousel;
