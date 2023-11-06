import React, { useState } from "react";
import "../style/form.css";
import { Link } from "react-router-dom";

const FormSearch = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
    document.body.classList.add('lock-scroll')
  }

  function handleClose(){
    setIsVisible(false)
    document.body.classList.remove('lock-scroll')
  }

  return (
    <>
      {isVisible && <div className="overlay" onClick={handleClose}></div>}
      <form action="" className="position-relative row" onClick={handleClick}>
        <div className="container container-form position-absolute top-0 start-50 translate-middle col-lg-10">
          <div>
            <p>Nama Mobil</p>
            <input type="text" className="form-control" />
          </div>
          <div>
            <p>Kategori</p>
            <select
              name=""
              id=""
              className="form-select"
              aria-label="Default select example"
            >
              <option value="" selected disabled></option>
              <option value="">2 - 4 Orang</option>
              <option value="">4 - 6 Orang</option>
              <option value="">6 - 8 Orang</option>
            </select>
          </div>
          <div>
            <p>Harga</p>
            <select name="" id="" className="form-select">
              <option value="" selected disabled></option>
              <option value="">Rp &lt; 400 000</option>
              <option value="">Rp 400 000 - Rp 600 000</option>
              <option value="">Rp &gt; 600 000</option>
            </select>
          </div>
          <div>
            <p>Status</p>
            <select name="" id="" className="form-select">
              <option value="" selected disabled></option>
              <option value="">Ready</option>
              <option value="">Disewa</option>
            </select>
          </div>
          <div className="d-flex align-items-end">
            <Link>Cari Mobil</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSearch;
