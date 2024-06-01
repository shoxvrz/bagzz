import React from "react";
import "./Main.scss";
import Loading from "../Loading/Loading.jsx";
import Card from "../Card/Card.jsx";
import UseGetData from "../../hooks/UseGetData.js";

const Main = () => {
  const [productData, loadMoreHandler, visible, loading] = UseGetData();

  return (
    <div className="main">
      {productData.slice(0, visible).map((pro, i) => (
        <Card key={pro.id} {...pro} />
      ))}
      <button onClick={loadMoreHandler}>Load more</button>
      {loading && <Loading className="loading" />}
    </div>
  );
};

export default Main;
