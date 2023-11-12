import React from "react";
import Header from "../component/Header";
import FormSearch from "../component/FormSearch";
import NavbarComponent from "../component/NavbarComponent";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/search.css";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[carName,setCarName] = useState("")
  const[carCategory,setCarCategory] = useState("")
  const[carPrice,setCarPrice] = useState({
    minPrice:250000,
    maxPrice:400000
  })
  const[carStatus,setCarStatus] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/customer/v2/car?name=${carName}&category=${carCategory}&maxPrice=${carPrice.maxPrice}&minPrice=${carPrice.minPrice}&isRented=${carStatus}`
        );
        console.log(response.data.car)
        setData(response.data.cars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [carName,carCategory,carPrice,carStatus]);
  return (
    <>
      <NavbarComponent />
      <Header showButton={false} showImage={true} showDesc={true} />
      <FormSearch setCarName={setCarName} setCarCategory={setCarCategory} setCarPrice={setCarPrice} setCarStatus={setCarStatus}/>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="car-container col-lg-10">
          {data.map((car) => (
            <div className="car">
              <div className="gambar">
                <img src={car.image} alt={car.name} />
              </div>
              <div>
                <p>{car.name}</p>
                <p>Price: {car.price}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Link to={`/detail/${car.id}`}>pilih mobil</Link>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default SearchPage;
