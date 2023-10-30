import React from "react";
import "../style/footer.css";
import { FiFacebook,FiInstagram,FiTwitter,FiMail,FiTwitch } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="container container-footer">
          <div>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <ul className="mb-0"> 
            <li>
              <a href="#about">Our services</a>
            </li>
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#testi">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <div className="mb-2">
            <p>Connect with us</p>
            <div className="icons">
              <span><FiFacebook color="white " width={20}/></span>
              <span><FiInstagram color="white " width={20}/></span>
              <span><FiTwitter color="white " width={20}/></span>
              <span><FiMail color="white " width={20}/></span>
              <span><FiTwitch color="white " width={20}/></span>
            </div>
          </div>
          <div>
            <p>Copyright Binar 2022</p>
            <div className="logo ms-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
