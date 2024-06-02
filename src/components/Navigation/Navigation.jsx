import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Navigation.scss';
import {useNavigate} from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <div className="navigation">
      <HomeIcon onClick={() => navigate('/home')} style={{ fontSize: '35px' }} className="icon" />
      <SearchIcon style={{ fontSize: '35px' }} className="icon" />
      <FavoriteIcon style={{ fontSize: '35px' }} className="icon" />
      <ShoppingBasketIcon onClick={() => navigate('/cart')} style={{ fontSize: '35px' }} className="icon" />
    </div>
  );
};

export default Navigation;
