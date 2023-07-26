import React, { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'T-shirt', price: 1800, image: 'https://add-to-cart-javascript.vercel.app/img/men-1.jpg' },
    { id: 2, name: 'Lady Top', price: 2000, image: 'https://add-to-cart-javascript.vercel.app/img/women-1.jpg' },
    { id: 3, name: 'Huawei Watch', price: 4000, image: 'https://add-to-cart-javascript.vercel.app/img/watch-1.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const totalItems = cart.length;
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar/>
    <div className="contain mt-5">
      <div className="row">
        <div className="col-lg-7 ms-5">
          <div className="row justify-content-center">
            {items.map((item) => (
              <div key={item.id} className="col-lg-4 mb-4">
                <div className="card">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <h4 className="card-text">${item.price}</h4>
                    <button
                      onClick={() => addToCart(item)}
                      className="btn btn-primary btn-sm mt-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cart mt-4">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item d-flex justify-content-between align-items-center mb-2">
            <span className='fs-5'>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-stats mt-4">
        <h4>Total Items in Cart: {totalItems}</h4>
        <h4>Subtotal: ${subtotal}</h4>
      </div>
    </div>
    </div>
  );
}

export default ShoppingCart;