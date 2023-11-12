import React from 'react'
import '../style/banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <section className='banner' id='banner'>
        <div className="container banner-container text-center">
            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to={"/searchPage"}>Mulai Sewa Mobil</Link>
        </div>
    </section>
    </>
  )
}

export default Banner