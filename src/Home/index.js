import React from "react";
import { connect } from "react-redux";

import "./home.scss";
import { CardProduct } from "../_components";

const Home = ({ products: { items, totalItems }, dispatch }) => {
  return (
    <div className="flex flex-column w-full">
      <div className="flex">
        <div className="flex-1">
          <h4 className="products__count">{totalItems} items</h4>
        </div>
      </div>

      <div className="products__grid">
        {items.map((product, index) => (
          <div className="products__box" key={`${product.code_color}-${index}`}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products,
  };
};

export default connect(mapStateToProps)(Home);
