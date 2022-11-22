import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState  } from "react";
import Badge from "@mui/material/Badge";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {AiFillDelete} from 'react-icons/ai'
import { DELETE_FROM_CART } from "../redux/actions/Actions-Creator";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [price,Setprice]=useState()


  let data = useSelector((state) => state.cartReducer.cart);
  console.log(data);

const dispatch=useDispatch();

const send=(id)=>{
  dispatch(DELETE_FROM_CART(id))
}

const total=()=>{
  let price=0;
  data.map((el)=> price=el.price *el.qnty + price)
  Setprice(price)
}
useEffect(() => {
  total()
  
}, [total]);

  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav-content">
            <Link to="/">
              <h1 className="logo">Home</h1>
            </Link>
            <span
              className="cart"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Badge badgeContent={data.length} color="secondary">
                <AiOutlineShoppingCart  />
              </Badge>
            </span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {data.length > 0 ? (
                <div className="parent-of-cart-product">
                  {data.map((product) => {
                    return (
                      <>
                        <div className="cart-product">
                          <Link to={`/product/${product.id}`}><img
                            className="cart-product-image"
                            src={product.image}
                            alt=""
                          />
                          </Link>
                          
                          <div className="cart-product-details">
                            <p className="cart-product-title">
                              {product.title}
                            </p>
                            <span className="cart-product-price">
                              ${product.price}
                            </span>
                            <span className="cart-product-quantity">
                              Quantity:{product.qnty}
                            </span>
                          </div>
                          <div className="cart-product-delete">
                            <AiFillDelete onClick={()=>send(product.id)} className="trash"/>
                            
                          </div>
                          
                        </div>
                        
                      </>
                    );
                  })}
                  <div className="total-price">
                            <span className="cart-total">Total:</span>
                            <span>$ {price}</span>
                          </div>
                </div>
              ) : (
                <div className="empty-cart">
                  <p>There's no products</p>
                  <h3>Add one</h3>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
