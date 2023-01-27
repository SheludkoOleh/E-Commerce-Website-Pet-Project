import React, { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { product } from "../../assets/data/data"
import { CardItems } from "./CardItems"
import { useSelector } from "react-redux"




export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false)
  const closeCard = () => {
    setCardOpen(null)
  }

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cardItem = useSelector((state) => state.cart.itemsList)

  //total
  let total = 0
  const itemsList = useSelector((state) => state.cart.itemsList)
  itemsList.forEach((item) => {
    total += item.totalPrice
  })

  return (
    <>
      <div className='card' onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className='cardIcon' />
        <span className='flexCenter'>{quantity}</span>
        </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cardItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        {cardItem.map((item) => (
            <CardItems 
                id={item.id}
                cover={item.cover}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice} />
        ))}

        <div className="total_price">
          <span>Total Price</span>
          <label htmlFor=''>${total}</label>
        </div>
        </div>
        
        </>
        )
    }