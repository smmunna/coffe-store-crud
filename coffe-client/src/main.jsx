import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home'
import AddCoffe from './components/AddCoffe/AddCoffe';
import OneProduct from './components/Home/Products/OneProduct/OneProduct';
import UpdateProduct from './components/Home/Products/UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffe')
      },
      {
        path: "/addcoffe",
        element: <AddCoffe />
      },
      {
        path: "/addcoffe/:id",
        element: <OneProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffe/${params.id}`)
      },
      {
        path: "/addcoffe/edit/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffe/edit/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
