import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Pages and Components
import App from './App.tsx';
import Home from './Routes/Home.tsx';

//CSS
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      theme='light'
    />
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
