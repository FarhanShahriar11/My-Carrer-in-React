import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// import About from './components/Blog';

import ErrorPage from './components/ErrorPage';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import Job from './components/Job';
import State from './components/State';
import JobDetails from './components/JobDetails';
import { productsAndCartData } from './loaders/getData';


  const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Statistics></Statistics>,
               
            },
            
            {
                path:'blog',
                element:<Blog></Blog>
            },
           
            {
                path:'job',
                element:<Job></Job>,
                loader:productsAndCartData,
                
                
            },
            {
                path:'statistics',
                element:<State></State>
                
                
            },
            {
                path:'/jobDetails/:id',
                element:<JobDetails></JobDetails>,
                
            }
            

        ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
