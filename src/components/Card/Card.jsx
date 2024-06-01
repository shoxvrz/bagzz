import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.scss'
import { useNavigate } from "react-router-dom";

const Card = ({title, price, thumbnail, id}) => {
  const navigate = useNavigate();
  return (
    <div  onClick={() => navigate('/pro/' + id)} className='card'>
        <div className="card__top">
                <FavoriteBorderIcon className='favoriteIcon'/>
        </div>
        <div className="card__center">
            <img src={thumbnail} alt="" />
        </div>
        <div className="card__bottom">
        <h1 className="title">{title}</h1>
        <span>${price}</span>
        </div>
    </div>
  )
}

export default Card