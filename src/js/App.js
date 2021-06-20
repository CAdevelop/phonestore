import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Container from "./components/templates/container/container";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import VentasPage from "./components/pages/VentaPage/VentasPage";
import ProductoPage from './components/pages/ProductoPage/ProductoPage'
import UsuariosPage from './components/pages/UsuariosPage/UsuariosPage'

const Home = () => {
  return (
    <Container>
      <HomePage />
    </Container>
  );
};

const Ventas = () => {
  return (
    <Container>
      <VentasPage />
    </Container>
  );
};

const Productos = () => {
  return (
    <Container>
      <ProductoPage/>
    </Container>
  );
};

const Usuarios = () => {
  return (
    <Container>
      <UsuariosPage/>
    </Container>
  );
};

export default function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ventas" component={Ventas} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/usuarios" component={Usuarios} />
        </Switch>
      </HashRouter>
    </ChakraProvider>
  );
}
