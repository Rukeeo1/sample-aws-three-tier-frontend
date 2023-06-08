import React from "react";
import { products } from "./ProductlistDetails";
import "./Productlist.css";

const Productlist = () => {
  return (
    <div className="product">
      <div className="product__header-container">
        <h2 class="product__header-title">Lacoste Seasonal Wardrobe&nbsp;</h2>
      </div>

      {/* productlist */}

      <div className="product__list-container">
        <div className="product__slider-list">
          {/* <div className="product__slide-box"> */}
          {products.map((product, index) => (
            <div className="product__item-container" key={index}>
              <div className="product__image-wrapper">
                <a href="/" className="product__image-link">
                  <div className="product__image-content">
                    <img className="product__image" src={product.img} alt="" />

                    <div className="product__image-pointer"></div>
                  </div>
                </a>
              </div>

              <div className="product__title-container">
                <div className="product__title-content">
                  <div className="product__main-title">
                    <a className="product__main-title-link">{product.title}</a>
                  </div>

                  <button className="product__btn-eye-container btn--small btn--icon">
                    {product.eye}
                  </button>
                </div>

                <span class="product__number-of-color-tile flex">
                  {product.numberOfColor}
                </span>

                <div class="product__title-flags">
                  <div class="product__item-flag item-flag">
                    {product.itemFlag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Productlist;
