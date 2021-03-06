import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "./navbar.scss";
import logo from "../../../img/logo.svg";
import {
  FiHome,
  FiShoppingCart,
  FiArchive,
  FiUsers,
  FiSliders,
  FiUser,
  FiLogOut,
  FiClipboard,
} from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <img src={logo}></img>
        </div>

        <div className="navbar__items">
          <Link to="/">
            <Button
              colorScheme={location.pathname === "/" ? "purple" : "gray"}
              variant="outline"
              leftIcon={<FiHome />}
            >
              Inicio
            </Button>
          </Link>

          <Link to="/ventas">
            <Button
              colorScheme={location.pathname === "/ventas" ? "purple" : "gray"}
              variant="outline"
              leftIcon={<FiShoppingCart />}
            >
              Venta
            </Button>
          </Link>

          <Link to="/productos">
            <Button
              colorScheme={
                location.pathname === "/productos" ? "purple" : "gray"
              }
              variant="outline"
              leftIcon={<FiArchive />}
            >
              Productos
            </Button>
          </Link>

          <Link to="/usuarios">
            <Button
              colorScheme={
                location.pathname === "/usuarios" ? "purple" : "gray"
              }
              variant="outline"
              leftIcon={<FiUsers />}
            >
              Usuarios
            </Button>
          </Link>
        </div>

        <div className="navbar__login-information">
          <Text fontSize="2xl" color="purple.600">
            <FiUser />
            Carlos Arcia
          </Text>
          <Button
            className="mt-4"
            colorScheme="red"
            variant="link"
            leftIcon={<FiLogOut />}
          >
            Cerrar Sesi??n
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
