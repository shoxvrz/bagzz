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
      <h1 className="favItems__title">Favorite Items</h1>
      <div className="favItems__list">
        {favItems.length === 0 ? (
          <h1 className="cart__itemList--empty">Empty</h1>
        ) : (
          favItems.map((item) => (
            <div key={item.id} className="favCard">
              <div className="favCard__left">
                <img src={item.images[0]} alt="" />
              </div>
              <span className="line"></span>
              <div className="favCard__right">
                <h3>{item.title}</h3>
                <button onClick={() => handleFavItem(item)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavItemsPage;
