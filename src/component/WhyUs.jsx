import React from "react";
import { FiThumbsUp, FiTag, FiClock, FiAward } from "react-icons/fi";
import "../style/why.css";
import { whyus } from "../data/index";

const WhyUs = () => {
  return (
    <>
      <section className="why" id="why">
        <div className="container p-0">
          <h1>Why Us?</h1>
          <p className="sub-title">Mengapa harus pilih Binar Car Rental?</p>
          <div className="container-content">
            {whyus.map((data) => (
              <div className="border">
                <span>
                  <data.icon width={20} color="#fff" />
                </span>
                <h6>{data.tittle}</h6>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
