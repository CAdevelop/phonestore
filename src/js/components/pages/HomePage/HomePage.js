import React from "react";
import { Heading, Container, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div className="home">
      <Heading as="h2" size="xl">
        Actividades de ventas de los ultimos 7 dias
      </Heading>
      <Box boxShadow="md" p="6" rounded="md" bg="white" className="mt-2">
        <div className="row">
          <div className="col-md-8">
            <h1>Grafica</h1>
          </div>
          <div className="col-md-4">
            <h1>Datos</h1>
          </div>
        </div>
      </Box>
      <Heading as="h2" size="lg" className="mt-4">
        Celulares más vendidos
      </Heading>
    </div>
  );
};

export default HomePage;
