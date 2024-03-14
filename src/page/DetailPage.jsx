import React, { useEffect, useState } from "react";
import Navbar from "../component/NavbarComponent";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../style/detail.css";
import { FiUsers } from "react-icons/fi";
import DateInput from "../component/DateInput";

const DetailPage = () => {
  const param = useParams();
  const [car, setCar] = useState({});
  const [category, setCagory] = useState("");
  const[totalHari,setTotalHari] = useState(null)

  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    const res = await axios.get(
      "https://api-car-rental.binaracademy.org/customer/car/" + param.id
    );
    setCar(res.data);
    let categoryText = "";
    if (res.data.category === "large") {
      categoryText = "6-8 orang";
    } else if (res.data.category === "medium") {
      categoryText = "4-6 orang";
    } else {
      categoryText = "2-4 orang";
    }

    setCagory(categoryText);
  };

  const handleTotalDay = (day)=>{
    setTotalHari(hari)
  }

  return (
    <>
      <Navbar />
      <Header showImage={false} showDesc={false} />
      <Container>
        <Row className="detail">
          <Col lg="6" className="detail-left">
            <p>Tentang Paket</p>
            <p>Include</p>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p>Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Refund, Reschedule, Overtime
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="p-0">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg="4" className="detail-right">
            <div className="gambar">
              <img src={car.image} alt="" />
            </div>
            <div className="mt-5 mb-5">
              <p>{car.name}</p>
              <span className="me-2">
                <FiUsers width={12} color="#8A8A8A" />
              </span>
              <span>{category}</span>
            </div>
            <DateInput totalDay={handleTotalDay}/>
            <div className="d-flex justify-content-between">
              <p>Total</p>
              <p>{car.price}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="button">lanjutkan pembayaran</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default DetailPage;
