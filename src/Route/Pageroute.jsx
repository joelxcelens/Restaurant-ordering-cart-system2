import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";



function Pageroute () {
    return(
        <Router>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>404- page not found</h1>} />
        </Routes>

        <Footer/>
        </Router>
    )
}

export default Pageroute;