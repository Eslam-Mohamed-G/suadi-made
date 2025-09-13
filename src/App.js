import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
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
import CreateAccount from './pages/CreateAccount/CreateAccount';
import UserSignUp from './pages/UserSignUp/UserSignUp';
import UserLogin from './pages/UserLogin/UserLogin';
import CompanySingUp from './pages/CompanySingUp/CompanySingUp';
const routes = createBrowserRouter([
    { path: "/", element: _jsx(Layouts, {}), children: [
            { index: true, element: _jsx(Home, {}) },
            { path: "compaines", element: _jsx(Compaines, {}) },
            { path: "servies", element: _jsx(Servies, {}) },
            { path: "companyDetails", element: _jsx(CompanyDetails, {}) },
            { path: "productDetails", element: _jsx(ProductDetails, {}) },
            { path: "chart", element: _jsx(Chart, {}) },
            { path: "completePurchase", element: _jsx(CompletePurchase, {}) },
            { path: "completePurchase2", element: _jsx(CompletePurchase2, {}) },
            { path: "createAccount", element: _jsx(CreateAccount, {}) },
            { path: "userSignUp", element: _jsx(UserSignUp, {}) },
            { path: "userLogin", element: _jsx(UserLogin, {}) },
            { path: "companySingUp", element: _jsx(CompanySingUp, {}) },
        ] }
]);
function App() {
    return (_jsx(RouterProvider, { router: routes }));
}
export default App;
