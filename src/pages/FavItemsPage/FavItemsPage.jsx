import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavItems } from "../../toolkit/favItemsSlice";
import "./FavItemsPage.scss";

const FavItemsPage = () => {
  const dispatch = useDispatch();

  const favItems = useSelector((state) => state.fav.favItems);

  const handleFavItem = (item) => {
    dispatch(removeFavItems({ id: item.id }));
  };

  return (
    <div className="favItems">
      <div className="favItems__list">
        {
     
          favItems.map((item) => (
            <div key={item.id} className="favCard">
              <div className="favCard__left">
                <img src={item.images[0]} alt="" />
              </div>
              <span className="line"></span>
              <div className="favCard__right">
                <h3>{item.title}</h3>

                <div className="favCard__right--btns">
                <button onClick={() => handleFavItem(item)}>Remove</button>
                <span className="line"></span>
                <button>Add To Cart</button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FavItemsPage;
