import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      className="testimonial-slider"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-item">
            <div className="testimonial-left-block">
              <div className="testimonial-thumbnail">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  width={140}
                  height={140}
                />
              </div>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.designation}</p>
              </div>
            </div>
            <div className="testimonial-right-block">
              <div className="testimonial-content">
                <p>{testimonial.review}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
