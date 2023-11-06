import React from "react";
import "../style/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestiImg from "../assets/image/testi-img.png";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testi } from "../data/index";

const Testimonial = () => {
  const iconArray = Array(5).fill(<FaStar color="#F9CC00" />);

  return (
    <>
      <div className="testi" id="testi">
        <div className="container-fluid">
          <h1 className="text-center ">Testimonial</h1>
          <p className="text-center ">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div className="swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              {testi.map((data) => (
                <SwiperSlide>
                  <div className="d-flex align-items-center pe-5">
                    <img src={data.img} alt="" />
                  </div>
                  <div>
                    <div className="star">
                      {iconArray.map((icon, index) => (
                        <span key={index}>{icon}</span>
                      ))}
                    </div>

                    <p className="text-start mt-1">{data.desc}</p>
                    <small>{data.name}</small>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="chevron">
            <span>
              <FiChevronLeft />
            </span>
            <span>
              <FiChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
