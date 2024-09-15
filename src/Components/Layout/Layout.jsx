import React from "react";
import { useSelector } from "react-redux";
import Routers from "../../Routes/Routers";
import Carts from "../Cart/Carts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartVisible);

  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
