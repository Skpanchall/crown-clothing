import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Userprovider } from './contexts/user.contexts';
import { ProductProvider } from './contexts/product.contexts';
import { CartProvider } from './contexts/cart.contexts';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Userprovider>
      <ProductProvider>
        <CartProvider>
          <App />
      </CartProvider>
      </ProductProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

