import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/tsx/Home';
import Lobby from './pages/tsx/Lobby';
import Perfil from './pages/tsx/Perfil';



const router = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/inicio",element:<Lobby/>},
  {path:"/perfil",element:<Perfil/>},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
