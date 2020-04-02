import React from 'react';

const Product = (props) => {
  let {product: {name, price}, title} = props;

  const productSelection = (evt) => {
    evt.preventDefault();
    props.clickedProductAction(props.product);
  }
  return ( <div>
    <h2> {name} </h2>
    <p>${price}</p>
    <button
      type="button"
      onClick={productSelection}
    >{title}</button>
  </div> )
}
export default Product;