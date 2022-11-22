import axios from "axios";
import React, { useEffect, useState } from "react";
import "./all-products.css";
import Product from "./Product";
const AllProducts = () => {
  const [data, setData] = useState([]);
  const fetchDataFromApi = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="all-products-title">All Products</h1>
        <div className="parent-of-products">
          {data.map((product) => {
            return <Product product={product} />
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
