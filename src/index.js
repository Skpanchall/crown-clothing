import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { CartProvider } from './contexts/cart.contexts';
import {BrowserRouter} from 'react-router-dom';
import {store} from './strore/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
          <CartProvider>
            <App />
        </CartProvider>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

