import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Body from './components/Body';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function Redirect() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/App" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}
export default Redirect;
