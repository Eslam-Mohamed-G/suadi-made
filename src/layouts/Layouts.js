import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
export default function Layouts() {
    return (_jsxs("div", { className: "", children: [_jsx("nav", { className: 'fixed top-0 start-0 end-0 z-50 bg-white', children: _jsx(Navbar, {}) }), _jsx("div", { className: "pt-10 min-h-dvh", children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
}
