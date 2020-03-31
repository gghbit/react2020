import React from 'react'

const Product = (props) => {
  let {name, price} = props.product;

  const productSelection = () => {
    props.addShoppingCartItem(props.product);
  }
  return ( <div>
    <h2> {name} </h2>
    <p>${price}</p>
    <button
      type="button"
      onClick={productSelection}
    >Comprar</button>
  </div> )
}

export default Product;