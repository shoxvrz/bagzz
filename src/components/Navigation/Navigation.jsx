import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Navigation.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <HomeIcon style={{fontSize: '35px'}} className="icon"/>
      <SearchIcon style={{fontSize: '35px'}} className="icon"/>
      <FavoriteIcon style={{fontSize: '35px'}} className="icon"/>
      <ShoppingBasketIcon style={{fontSize: '35px'}} className="icon"/>
    </div>
  );
};

export default Navigation;
