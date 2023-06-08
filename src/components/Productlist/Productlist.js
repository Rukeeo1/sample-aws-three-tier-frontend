import React from "react";
import LacosteNeo from "../../assets/lacoste-neo.jpg";
import "./Productlist.css";
import { Svgs } from "../../assets/svgs";

const Productlist = () => {
  return (
    <div className="product">
      <div className="product__header-container">
        <h2 class="product__header-title">Lacoste Seasonal Wardrobe&nbsp;</h2>
      </div>

      {/* productlist */}

      <div className="product__list-container">
        <div className="product__slide-list">
          <div className="product__item-container">
            <div className="product__image-wrapper">
              <a href="/" className="product__image-link">
                <div className="product__image-content">
                  <img className="product__image" src={LacosteNeo} alt="" />

                  <div className="product__image-pointer"></div>
                </div>
              </a>
            </div>

            <div className="product__title-container">
              <div className="product__title-content">
                <div className="product__main-title">
                  <a className="product__main-title-link">
                    Men's Lacoste L003 Neo Trainers
                  </a>
                </div>

                <button
                  className="product__btn-eye-container btn--small btn--icon"
                  title="Quick view"
                  data-quick-view-init="id-11"
                >
                  <Svgs.Eye className="product__eye" />
                </button>
              </div>

              <span class="product__number-of-color-tile flex">
                + 6 colours
              </span>

              <div class="product__title-flags">
                <div class="product__item-flag item-flag">
                  Bestseller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
