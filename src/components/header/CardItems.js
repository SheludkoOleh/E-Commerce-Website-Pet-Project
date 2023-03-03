import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

export const CardItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const removeAllCart = () => {
    dispatch(cartActions.removeAllCart(id));
  };

  return (
    <>
      <div className='cardList' key={id}>
        <div className='cardContent'>
          <div className='img'>
            <img src={cover} alt='' />
          </div>
          <div className='details_shoping_cart'>
            <p>{name}</p>
            <label htmlFor=''> Unit Price ${price}</label>
          </div>
          <div className='price'>
            <div className='qty flexCenter'>
              <button className='plus' onClick={incrementCartItem}>
                <AiOutlinePlus />
              </button>
              <button className='num'>{quantity}</button>
              <button className='minus' onClick={decrementCartItem}>
                <AiOutlineMinus />
              </button>
            </div>
            <div className='priceTitle'>Price ${totalPrice}</div>
            <button className='remove_flexcCenter' onClick={removeAllCart}>
              <IoTrashOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
