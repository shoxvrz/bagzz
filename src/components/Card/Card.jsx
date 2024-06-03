import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToFavItems } from "../../toolkit/favItemsSlice";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ title, price, images, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToFavList = (item) => {
    dispatch(addToFavItems(item));
    setIsLiked(true);
  };

  const item = { title, price, images, id };

  return (
    <div className="card">
      <div className="card__top">
        {isLiked ? (
          <FavoriteIcon className="favoriteIcon" />
        ) : (
          <FavoriteBorderIcon
            onClick={() => handleAddToFavList(item)}
            className="favoriteIcon"
          />
        )}
      </div>
      <div onClick={() => navigate("/pro/" + id)} className="card__center">
        <img src={images[0]} alt="" />
      </div>
      <div className="card__bottom">
        <h1 className="title">{title}</h1>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default Card;
