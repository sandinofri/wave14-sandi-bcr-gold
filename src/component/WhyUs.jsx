import React from "react";
import { FiThumbsUp ,FiTag,FiClock,FiAward} from "react-icons/fi";
import "../style/why.css";

const WhyUs = () => {
  return (
    <>
      <section className="why" id="why">
        <div className="container p-0">
          <h1>Why Us?</h1>
          <p className="sub-title">Mengapa harus pilih Binar Car Rental?</p>
          <div className="container-content">
            <div className="border">
              <span>
                <FiThumbsUp width={20} color="#fff" />
              </span>
              <h6>Mobil Lengkap</h6>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="border">
              <span>
                <FiTag width={16} color="#fff" />
              </span>
              <h6>Harga Murah</h6>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div className="border">
              <span>
                <FiClock width={16} color="#fff" />
              </span>
              <h6>Layanan 24 Jam</h6>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div className="border">
              <span>
                <FiAward width={16} color="#fff" />
              </span>
              <h6>Sopir Profesional</h6>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
