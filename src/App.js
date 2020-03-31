import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const dateNow = new Date().getFullYear();
  const [products, setProducts] = useState([
    { id: 1, name: 'Camisa ReactJS', price: 50 },
    { id: 2, name: 'Camisa Angular', price: 60 },
    { id: 3, name: 'Camisa NodeJS', price: 76 },
    { id: 4, name: 'Camisa LitElement', price: 49.9 },
  ]);
  const [shoppingCart, setProductCart] = useState([]);
  const addShoppingCartItem = (product) => {
    setProductCart([...shoppingCart, product])
  };

  return (
    <Fragment>
      <Header
        title="Tienda Virtual"
      />
      <h1>Lista de Productos</h1>
      {
        products.map( product => (
          <Product
            key={product.id}
            product={ product }
            setProductCart= {setProductCart}
            addShoppingCartItem={addShoppingCartItem}
            shoppingCart={shoppingCart}
          />
        ))
      }
      <ShoppingCart/>
      <Footer
        dateNow={dateNow}
      />
    </Fragment>
  );
}

export default App;
