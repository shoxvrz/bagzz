import React from "react";
import "./Main.scss";
import Loading from "../Loading/Loading.jsx";
import Card from "../Card/Card.jsx";
import UseGetData from "../../hooks/UseGetData.js";

const Main = () => {
  const [productData, , , loading] = UseGetData();

  return (
    <div className="main__products">
      {productData.map((pro) => (
        <Card pro={pro} key={pro.id} {...pro} />
      ))}

      {loading && <Loading className="loading" />}
    </div>
  );
};

export default Main;
