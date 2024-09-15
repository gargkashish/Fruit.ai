import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Service from "../Components/Service/Service";
import Testimonial from "../Components/Testimonial/Testimonial";
import AllFoods from "../Pages/AllFoods";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import FoodDetails from "../Pages/FoodDetails";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import PlaceOrder from "../Pages/PlaceOrder";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      {/* Route Settings */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/about" element={<About />} />
      <Route path="/all-foods" element={<AllFoods />} />
      <Route path="/all-foods/:id" element={<FoodDetails />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />

      {/* Private route setting */}
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/*" element={<ProtectedRoutes />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="order" element={<PlaceOrder />} />
      </Route>
    </Routes>
  );
};

export default Routers;
