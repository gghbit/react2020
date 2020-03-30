import React from 'react'

const Product = (props) => {
  let {id, name, price} = props.product;

  const productSelection = () => {
    console.log('comprando...', id);
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