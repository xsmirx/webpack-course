import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import PNG from '@/assets/mid.png';
import JPG from '@/assets/hero.jpg';
import SVG from '@/assets/api.svg';
function TODO(a) {
    console.log(a);
}
export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    TODO(123);
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "ISDESCKTOPPLATFORM" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "ISMOBILEPLATFORM" });
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { style: { color: 'red' }, children: [_jsx("img", { src: PNG, alt: "PNG" }), _jsx("img", { src: JPG, alt: "JPG" }), _jsx(SVG, { width: 50, height: 50 })] }), _jsx(Link, { to: '/about', children: "About" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "Shop" }), _jsx("h1", { className: classes.value, children: count }), _jsx("button", { className: classes.button, onClick: increment, children: "increment" }), _jsx(Outlet, {})] }));
};
