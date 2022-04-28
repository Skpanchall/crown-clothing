import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Userprovider } from './contexts/user.contexts';
import { CategoriesProvider } from './contexts/product.contexts';
import { CartProvider } from './contexts/cart.contexts';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Userprovider>
      <CategoriesProvider>
        <CartProvider>
          <App />
      </CartProvider>
      </CategoriesProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

