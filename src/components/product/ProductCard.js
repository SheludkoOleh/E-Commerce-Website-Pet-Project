import React from "react";
import { Link } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';




export const ProductCard = ({ id, cover, name, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  return (
    <div className='box_boxItem' id='product'>
      <div className='img'>
        <Link to={`/product/${id}`}>
          <img src={cover} alt={name} />
        </Link>
      </div>
      <div className='details'>
        <p>{name}</p>
        <h3>${price}</h3>
        <button onClick={addToCart}>
          <span>Додати до кошика</span>
          <a>
            <ImArrowRight2 />
          </a>
        </button>

      </div>
    </div>
  );
};
