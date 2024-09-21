import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// import './index.css'
import './App.css'
import { Layout } from './components/layout.jsx'
import { Home } from './components/home.jsx'
import { About } from './components/about.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    
      
      //     path: "/",
      //     element: <ListCard />,
      //     children :[
      //       {
      //         path: "/card",
      //         element: <Card/>
      //       },
      //       {
      //         path: "/ListCard/:id", 
      //         element: <DetailCard /> 
      //       },
            
      //     ] 
      //   },
 
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

