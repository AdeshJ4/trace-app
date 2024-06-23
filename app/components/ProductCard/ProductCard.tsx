import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Name: 'Tomato'</h1>
      <h2>Category: Vegetable</h2>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
