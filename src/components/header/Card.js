import React, { useState } from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AiOutlineClose } from "react-icons/ai";
import { CardItems } from "./CardItems";
import { useSelector } from "react-redux";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const closeCard = () => {
    setCardOpen(false);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.itemsList)

  //total
  let total = 0
  const itemsLists = useSelector((state) => state.cart.itemsList)
  itemsLists.forEach((item) => {
    total += item.totalPrice
  })

  return (
    <>
      <div className="cart-container">
        <div className='cardIcon' onClick={() => setCardOpen(!cardOpen)}>
          {quantity > 0 ? (
            <>
              <ShoppingCartIcon className={`cartIcon ${cardOpen ? 'invisible' : 'show'}`} />
              <span className={`flexCenter ${cardOpen ? 'hidden' : 'show'}`}>{quantity}</span>
            </>
          ) : null}
        </div>
        <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
        <div className={cardOpen ? "cardItem" : "cardhide"}>
          <div className="title flex">
            <h2>Shopping Cart</h2>
            <button onClick={closeCard}>
              <AiOutlineClose className="icon" />
            </button>
          </div>
          {cartItems.map((item) => (
            <CardItems
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}

          <div className="total_price">
            <span>Total Price</span>
            <label htmlFor="">${total}</label>
          </div>
        </div>
      </div>
    </>
  );
};
