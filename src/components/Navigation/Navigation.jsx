import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useDispatch, useSelector } from "react-redux";
import './Navigation.scss';
import {useNavigate} from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="navigation">
      <HomeIcon onClick={() => navigate('/home')} style={{ fontSize: '35px' }} className="icon" />
      <SearchIcon style={{ fontSize: '35px' }} className="icon" />
      <FavoriteIcon onClick={() => navigate('/favItems')} style={{ fontSize: '35px' }} className="icon" />
      <ShoppingBasketIcon onClick={() => navigate('/cart')} style={{ fontSize: '35px' }} className="icon basket-icon" />
      <span className='calc_number'>{totalQuantity}</span>
    </div>
  );
};

export default Navigation;
