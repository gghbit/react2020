import React from 'react';
import './shoppingCart.css';
import Product from './Product';

const ShoppingCart = (props) => {
  let { title, cart, counter, buttonTitle, removeProductCart} = props;
  const showCounterMessage = (counter) => ( counter ? <h3>Articulos en el carrito { counter }</h3> : '');

  return (
    <div className="cart">
      <h2>{ title }</h2>
      { showCounterMessage(counter) }
      {
        cart.length
        ?
          cart.map(product => (
            <Product
              key={product.buyId}
              product={product}
              title={buttonTitle}
              clickedProductAction={removeProductCart}
            />
          ))
        : <p>El carrito esta vacío </p>

      }
    </div>)
}
export default ShoppingCart;
