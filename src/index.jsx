import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
      <App />
        </Provider>
  </React.StrictMode>
);

