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

const Testimonial = () => {
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
              <SwiperSlide>
                <div className="d-flex align-items-center pe-5">
                  <img src={TestiImg} alt="" />
                </div>
                <div>
                  <div className="star">
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                  </div>

                  <p className="text-start mt-1">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <small>John Dee 32, Bromo</small>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-center pe-5">
                  <img src={TestiImg} alt="" />
                </div>
                <div>
                  <div className="star">
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                  </div>

                  <p className="text-start mt-1">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <small>John Dee 32, Bromo</small>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-center pe-5">
                  <img src={TestiImg} alt="" />
                </div>
                <div>
                  <div className="star">
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                  </div>

                  <p className="text-start mt-1">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <small>John Dee 32, Bromo</small>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-center pe-5">
                  <img src={TestiImg} alt="" />
                </div>
                <div>
                  <div className="star">
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                  </div>

                  <p className="text-start mt-1">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <small>John Dee 32, Bromo</small>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-center pe-5">
                  <img src={TestiImg} alt="" />
                </div>
                <div>
                  <div className="star">
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                    <span>
                      <FaStar color="#F9CC00" />
                    </span>
                  </div>

                  <p className="text-start mt-1">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <small>John Dee 32, Bromo</small>
                </div>
              </SwiperSlide>
             
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
