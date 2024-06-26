import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseGetData from "../../hooks/UseGetData";
import Loading from "../../components/Loading/Loading";
import "./ProductPage.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../toolkit/cartSlice";

const ProductPage = () => {
  const [productData] = UseGetData();
  const { proId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeSection, setActiveSection] = useState("description");
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    if (productData.length > 0) {
      const foundProduct = productData.find((p) => p.id === +proId);
      setProduct(foundProduct);
    }
  }, [productData, proId]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="productPage">
      <div className="productPage__top">
        <div className="productPage__top--image">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="productPage__top--right">
          <div className="productPage__top--right-info">
            <h2>{product.brand}</h2>
            <p>{product.title}</p>
            <h3>${product.price}</h3>
          </div>
          <div className="productPage__top--right-buttons">
            <button>Buy Now</button>
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="productPage__main">
        <div className="productPage__main--nav">
          <p
            className={activeSection === "description" ? "active" : ""}
            onClick={() => setActiveSection("description")}
          >
            Description
          </p>
          <p
            className={activeSection === "shipping" ? "active" : ""}
            onClick={() => setActiveSection("shipping")}
          >
            Payment Info
          </p>
          <p
            className={activeSection === "payment" ? "active" : ""}
            onClick={() => setActiveSection("payment")}
          >
            Status
          </p>
        </div>
        <div className="productPage__main--info">
          {activeSection === "description" && (
            <div className="desc">
              <span>Product Details:</span>
              {product.description}
            </div>
          )}
          {activeSection === "shipping" && (
            <div className="info">
              <span>Brand: {product.brand}</span>
              <span>
                Dimensions:
                <span>Width: {product.dimensions.width}</span>
                <span>Height: {product.dimensions.height}</span>
                <span>Depth: {product.dimensions.depth}</span>
              </span>
              <span>Warranty Info: {product.warrantyInformation}</span>
              <span>Shipping Info: {product.shippingInformation}</span>
              <span>Availability Status: {product.availabilityStatus}</span>
            </div>
          )}
          {activeSection === "payment" && (
            <div className="payment">
              <p>
                We accept the following forms of payment for online purchases:
              </p>
              <p>
                PayPal may not be used to purchase Made to Order Décor or DIY
                items.
              </p>
              <p>
                The full transaction value will be charged to your credit card
                after we have verified your card details, received credit
                authorization, confirmed availability, and prepared your order
                for shipping. For Made To Order, DIY, personalized, and selected
                Décor products, payment will be taken at the time the order is
                placed.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
