import React from 'react';
import './Header.css';
import mealsImage from "../assets/meals1.jpg"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>ReactMeals</h1>
        </div>
        <div className="header-cart">
          <button className="cart-button">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Your Cart</span>
            <span className="cart-count">0</span>
          </button>
        </div>
      </header>

      <div className="header-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>

  );
};

export default Header;
