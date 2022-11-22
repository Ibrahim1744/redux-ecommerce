import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './product-details.css'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, DELETE_FROM_CART , DELETE_INDIVIDUAL } from '../redux/actions/Actions-Creator';

const ProductDetails = () => {
const [product , setProduct]=useState([]);

const dataProduct=useSelector(state=>state.cartReducer.cart);

const compare=()=>{
  let compareData=dataProduct.filter((e)=>  {
    return e.id==id
  })
  setProduct(compareData)
  console.log(product)

}
const history=useNavigate()
  const { id }=useParams();
  // const fetchProductFromApi=(id)=>{
  //   axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
  //     setProduct(res.data)
  //   })
  // }
  useEffect(() => {
    // fetchProductFromApi(id)
    compare()
  }, [compare]);




  const dispatch=useDispatch();

  const send=(id)=>{
    dispatch(DELETE_FROM_CART(id))
    history("/")
  }

  const add=(item)=>{
    dispatch(ADD_TO_CART(item))
  }
  const remove_one_product=(item)=>{
    dispatch(DELETE_INDIVIDUAL(item))
  }

  return (
    <>
    <div className="container">

    {
      product.map((product)=>{
        return(
          <div className="single-product-details">
          <div className="product-img-desc">
          <div className="product-details-img">
            <img src={product.image} alt="" />
          </div>
          <p className='product-desc'>
            {product.description}
          </p>
          </div>
          
            <div className="product-details-info">
              <h2>{product.title}</h2>
              <p className='product-details-price'>$  {product.price * product.qnty}</p>
                <span >Total:</span>
  
            </div>
            <div className="buttons">
              <button onClick={ product.qnty <=1 ? ()=>send(product.id) : ()=>remove_one_product(product)}>-</button>
              <span className='qunatity'>{product.qnty}</span>
              <button onClick={()=>add(product)}>+</button>
              <div className='remove-product-details'>
                <AiFillDelete onClick={()=>send(product.id)} className='trash'/>
              </div>
            </div>
        </div>
        )
      })
    
    }

    </div>
  
    </>
  );
}

export default ProductDetails;
