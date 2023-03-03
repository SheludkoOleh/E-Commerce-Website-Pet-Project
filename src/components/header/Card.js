import React, { useState, useMemo } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CardItems } from "./CardItems";
import { useSelector } from "react-redux";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const closeCard = () => {
    setCardOpen(false);
  };

  const { totalQuantity, itemsList } = useSelector((state) => state.cart);

  const total = useMemo(() => { 
    return itemsList.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [itemsList]);

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{totalQuantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cardItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {itemsList.map((item) => (
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
    </>
  );
};
