import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './Dashboard';
import '../styles/index.scss';
export var AppRouter = function () {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: "/*", element: _jsx(Dashboard, {}) //tablero
             }) }) }));
};
