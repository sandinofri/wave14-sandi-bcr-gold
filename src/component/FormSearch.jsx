import React, { useState } from "react";
import "../style/form.css";
import { Link } from "react-router-dom";

const FormSearch = ({setCarName,setCarCategory,setCarPrice,setCarStatus}) => {
  const [isVisible, setIsVisible] = useState(false);
  const[name,setName]=useState('')
  const[category,setCategory]=useState('')
  const[price,setPrice]=useState(0)
  const[status,setStatus]=useState(false)

  function handleClick() {
    setIsVisible(true);
    document.body.classList.add("lock-scroll");
  }


  function handleClose() {
    setIsVisible(false);
    document.body.classList.remove("lock-scroll");
    setName("")
    setCategory("")
    setPrice("")
    setStatus("")
  }

  function handleNameChange(e){
    setName(e.target.value)
    setCarName(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
    setCarCategory(e.target.value)
  }

  function handlepriceChange(e){
    const selectedValue = e.target.value;

  // Memproses nilai untuk rentang harga
  if (selectedValue === "<400000") {
    setCarPrice({
      minPrice: 0,
      maxPrice: 200000
    });
  } else if (selectedValue === "400000-600000") {
    setCarPrice({
      minPrice: 400000,
      maxPrice: 600000
    });
  } else if (selectedValue === ">600000") {
    setCarPrice({
      minPrice: 600000,
      maxPrice: Infinity // Atau nilai maksimum yang sesuai
    });
  } else {
    // Menangani opsi lain jika diperlukan
    setCarPrice({
      minPrice: 0,
      maxPrice: 0
    });
  }
  }

  function handleStatusChange(e){
    setStatus(e.target.value)
    setCarStatus(e.target.value)
  }

 

  return (
    <>
      {isVisible && <div className="overlay" onClick={handleClose}></div>}
      <form action="" className="position-relative row" >
        <div className="container container-form position-absolute top-0 start-50 translate-middle col-lg-10">
          <div>
            <p>Nama Mobil</p>
            <input type="text" placeholder="cari mobil" className="form-control" onClick={handleClick} onChange={handleNameChange} value={name}/>
          </div>
          <div>
            <p>Kategori</p>
            <select
              name=""
              id=""
              className="form-select"
              aria-label="Default select example"
              onClick={handleClick}
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="" selected disabled>kategori</option>
              <option value="small">2 - 4 Orang</option>
              <option value="medium">4 - 6 Orang</option>
              <option value="large">6 - 8 Orang</option>
            </select>
          </div>
          <div>
            <p>Harga</p>
            <select name="" id="" className="form-select" value={price} onClick={handleClick} onChange={handlepriceChange}>
              <option value="" selected disabled>harga</option>
              <option value="<400000">Rp &lt; 400 000</option>
              <option value="400000-600000">Rp 400 000 - Rp 600 000</option>
              <option value=">600000">Rp &gt; 600 000</option>
            </select>
          </div>
          <div>
            <p>Status</p>
            <select name="" id="" className="form-select" value={status} onClick={handleClick} onChange={handleStatusChange}>
              <option value="" selected disabled>status</option>
              <option value="false">Ready</option>
              <option value="true">Disewa</option>
            </select>
          </div>
          <div className="d-flex align-items-end">
            <Link onClick={handleClose}>Cari Mobil</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSearch;
