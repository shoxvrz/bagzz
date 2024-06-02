import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import './Card.scss'
import { useNavigate } from "react-router-dom";
import UseFavItems from '../../hooks/UseFavItems';

const Card = ({title, price, images, id}) => {
  const {addFavItem, removeFavItems, isFavourite} = UseFavItems();
  const navigate = useNavigate();
  const item = { title, price, images, id };

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite(item)) {
      removeFavItems(item);
    } else {
      addFavItem(item);
    }
  };
  
  return (
    <div  onClick={() => navigate('/pro/' + id)} className='card'>
        <div className="card__top">
        {isFavourite(item) ? (
          <FavoriteIcon className="favoriteIcon" onClick={toggleFavourite} />
        ) : (
          <FavoriteBorderIcon className="favoriteIcon" onClick={toggleFavourite} />
        )}
        </div>
        <div className="card__center">
            <img src={images[0]} alt="" />
        </div>
        <div className="card__bottom">
        <h1 className="title">{title}</h1>
        <span>${price}</span>
        </div>
    </div>
  )
}

export default Card