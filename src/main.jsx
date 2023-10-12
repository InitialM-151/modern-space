import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './assets/css/index.css';
import HomePage from './pages/HomePage.jsx';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Congratulation from './pages/Congratulation';
import ErrorPage from './pages/ErrorPage';
import Provider from './hooks/useGlobalContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'categories/:idc',
    element: <Details />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/categories/:idc/products/:idp',
    element: <Details />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'cart',
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'congratulation',
    element: <Congratulation />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
