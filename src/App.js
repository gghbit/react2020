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
    { id: 5, name: 'Basic T-Shirt', price: 15.9 },
    { id: 6, name: 'T-Shirt Geek', price: 19.9 },
  ]);
  const [cart, setProductCart] = useState([]);
  const [buyCounter, setBuyCounter ] = useState(0);
  const [deleteCounter, setDeleteCounter ] = useState(0);

  const addShoppingCartItem = (product) => {
    setBuyCounter(buyCounter + 1);
    setProductCart([...cart, {...product, buyId: ''+ product.id + buyCounter + deleteCounter }])
  };
  const removeProductCart= (product) => {
    let updatedCart = cart.filter(item => item.buyId !== product.buyId)
    setProductCart([...updatedCart]);
    setBuyCounter(buyCounter - 1);
    setDeleteCounter(deleteCounter + 1);
  }
  return (
    <Fragment>
      <Header
        title="Tienda Virtual"
      />
      <h1>Lista de Productos</h1>
      {
        products.map( (product) => (
          <Product
            key={product.id}
            title="Comprar"
            product={ product }
            clickedProductAction={addShoppingCartItem}
            cart={cart}
          />
        ))
      }
      <ShoppingCart
        cart={cart}
        counter={ buyCounter }
        title="Tu carrito de Compras"
        buttonTitle='Eliminar'
        removeProductCart= {removeProductCart}
      />
      <Footer
        dateNow={dateNow}
      />
    </Fragment>
  );
}

export default App;
