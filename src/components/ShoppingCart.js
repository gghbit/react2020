import React from 'react';
import './shoppingCart.css';
import Product from './Product';

const ShoppingCart = (props) => {
  let { cart } = props;
  return (
    <div className="cart">
      <h2> Tu carrito de Compras</h2>
      {
        cart.length
        ?
          cart.map(product => (
            <Product
              key={product.id}
              product={product}
              title="Eliminar"
            />
          ))
        : <p>El carrito esta vacío </p>

      }
    </div>)
}
export default ShoppingCart;
