import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import TshirtsPage from './pages/TshirtsPage.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BagProvider } from './constants/BagContext.jsx';
import MyCart from './sections/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tshirts",
    element: <TshirtsPage />
  },
  {
    path: "/cart",
    element: <MyCart />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BagProvider>
      <RouterProvider router={router} />
    </BagProvider>
  </React.StrictMode>,
);
