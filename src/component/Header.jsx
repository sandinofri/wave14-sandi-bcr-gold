import React from 'react'
import '../style/header.css'
import { Col, Container, Row } from 'react-bootstrap'
import car from '../assets/image/car.png'

const Header = () => {
  return (
    <>
    <section className='header' id='header'>
      <Container fluid>
        <Row >
          <Col lg='6' className=' d-flex align-items-center'>
          <div className='left'>
            <h1 className='border'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a href="">Mulai Sewa Mobil</a>
          </div>
          </Col>
          <Col lg='6' className='position-relative'>
          <div className='right'>
            <div className='car-image'>
              <img src={car} alt="" />
            </div>
            <div className='background-blue'></div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    </>
  )
}

export default Header