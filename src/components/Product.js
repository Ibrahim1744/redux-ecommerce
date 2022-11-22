import React from "react";
import { useDispatch } from "react-redux";
import './product.css'
import {ADD_TO_CART} from '../redux/actions/Actions-Creator'
const Product = ({ product }) => {


const dispatch=useDispatch();
const send=(product)=>{
  dispatch(ADD_TO_CART(product))
}

  return (
    <>
        <div className="product">
          <div className="product-img">
           
             <img src={product.image} alt="" />
             
          
          </div>
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button onClick={()=>send(product)} className="add-to-cart">Add to cart</button>
          </div>
        </div>
     
    </>
  );
};

export default Product;
