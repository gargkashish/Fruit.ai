import React, { useEffect, useRef } from "react";
import logo from "../../../public/fav-icon.png";
import { Link, Navigate, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "../../Styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { CartUiAction } from "../../Redux/Slices/CartUiSlice";
import userIcon from "../../assets/images/user-icon.jpg";
import { motion } from "framer-motion";
import useAuth from "../../Custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

// Nav links are created
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Food",
    path: "/all-foods",
  },
  {
    display: "Service",
    path: "/service",
  },
  {
    display: "Testimonial",
    path: "/testimonial",
  },
  {
    display: "About",
    path: "/about",
  },
  // {
  //   display: "Contact",
  //   path: "/contact",
  // },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(CartUiAction.toggle());
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__ProfileAction");

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out ");
        Navigate("/home");
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__sticky");
  //     } else {
  //       headerRef.current.classList.remove("header__sticky");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);

  return (
    <header className="header border-bottom sticky-top bg-white">
      <Container>
        {/* ---------------Header section------------- */}
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center  gap-1">
            <img className="img-fluid" src={logo} alt="" />
            <h5>
              <Link to="/home">Foodsify</Link>
            </h5>
          </div>

          {/* =========== menu ======= */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/*======== Nav right Icon ============ */}
          <div className="nav__right d-flex gap-3">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-bag-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {/* <span className="user">
              <Link to="/login">
                <img className="" src={userIcon} alt="" />
              </Link>
            </span> */}
            
            {/* -----------------Profile Action --------------- */}
            <div className="profile">
              <motion.img
                whileTap={{ scale: 1.2 }}
                src={currentUser ? currentUser.photoURL : userIcon}
                // src={userIcon}
                alt=""
                onClick={toggleProfileActions}
              />

              <div
                className="profile__action"
                ref={profileActionRef}
                onClick={toggleProfileActions}
              >
                {currentUser ? (
                  <ul>
                    <li onClick={logout}>Logout</li>
                    {/* <li>
                      <Link
                        className="text-decoration-none text-black"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li> */}
                  </ul>
                ) : (
                  <div className="d-flex align-items-center justify-content-center flex-column text-white rounded">
                    <Link
                      className="text-decoration-none text-white py-1"
                      to="/register"
                    >
                      SignUp
                    </Link>
                    <Link
                      className="text-decoration-none text-white py-1"
                      to="/login"
                    >
                      Login
                    </Link>
                    {/* <Link
                      className="text-decoration-none text-black"
                      to="/login"
                    >
                      Dashboard
                    </Link> */}
                  </div>
                )}
              </div>
            </div>

            {/* --------------Toggle menu------------- */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
