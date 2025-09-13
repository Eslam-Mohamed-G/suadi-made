import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Home from './pages/Home/Home';
import Compaines from './pages/Compaines/Compaines';
import Servies from './pages/Servies/Servies';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Chart from './pages/Chart/Chart';
import CompletePurchase from './pages/CompletePurchase/CompletePurchase';
import CompletePurchase2 from './pages/CompletePurchase/CompletePurchase2';

const routes = createBrowserRouter([
  { path: "/", element: <Layouts />, children:[
    { index: true, element: <Home/> },
    { path: "compaines", element: <Compaines/> },
    { path: "servies", element: <Servies/> },
    { path: "companyDetails", element: <CompanyDetails/> },
    { path: "productDetails", element: <ProductDetails/> },
    { path: "chart", element: <Chart/> },
    { path: "completePurchase", element: <CompletePurchase/> },
    { path: "completePurchase2", element: <CompletePurchase2/> },
  ]} 
]);
function App() {

  return (

    <RouterProvider router={routes} />
  )
}

export default App
