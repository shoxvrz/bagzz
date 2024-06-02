import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../../toolkit/cartSlice";
import "./CartPage.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice =
    cartItems.reduce((total, item) => total + item.price * item.qty, 0) + 5.59;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeCart({ id: product.id }));
  };

  console.log(cartItems);

  return (
    <div className="cart">
      <div className="cart__itemList">
        {cartItems.length === 0 ? (
          <p className="cart__itemList--empty">Empty</p>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className="item">
              <div className="item__left">
                <div className="item__left--image">
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="item__left--btns">
                  <button onClick={() => handleRemoveCart(product)}>-</button>
                  <span>{product.qty}</span>
                  <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
              </div>
              <div className="item__right">
                <h1>{product.brand}</h1>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
              </div>
              <span className="item__line"></span>
            </div>
          ))
        )}
      </div>
      <div className="cart__calc">
      <p>Total Quantity: {totalQuantity}</p>
      <p>Payment for Delivery: $5.59</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
  // working
};

export default CartPage;
