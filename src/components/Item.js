import React, { useState } from "react";
import itemsData from "../data/items";
function Item({ name, category }) {
  const[inCart ,setIncart] = useState(false);
  function addToCart(e){
    e.preventDefault();
    setIncart(true);
  }
  return (
    <li className={inCart?"in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
