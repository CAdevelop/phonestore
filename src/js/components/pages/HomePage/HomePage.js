import React, { useState } from "react";
import { Heading, Container, Box, Text } from "@chakra-ui/react";
import TelefonoCard from "../../cards/telefonoCard";
import { Grid, GridItem } from "@chakra-ui/react";
import Sells7Days from "../../charts/Sells7Days";

const HomePage = () => {
  const telefonosMasVendidos = useState([
    {
      id: 1,
      telefono: "Redmi Note 9 Pro",
      marca: "Xiaomi",
      ventas: 2314,
    },
    {
      id: 2,
      telefono: "Iphone 12",
      marca: "Apple",
      ventas: 1242,
    },
    {
      id: 3,
      telefono: "Galaxy A30",
      marca: "Samsung",
      ventas: 1012,
    },
  ]);

  return (
    <div className="home">
      <Heading as="h2" size="xl" color="gray.700">
        Actividades de ventas de los ultimos 7 dias
      </Heading>
      <Box boxShadow="md" p="6" rounded="md" bg="white" className="mt-2">
        <div className="row">
          <div className="col-md-8">
            <Sells7Days />
          </div>
          <div className="col-md-4">
            <Text fontSize="2xl">Pico más alto</Text>
            <Heading as="h5" size="lg" color="green">
              $ 24,343
            </Heading>
            <Text fontSize="2xl">Pico más bajo</Text>
            <Heading as="h5" size="lg" color="red">
              $ 2,532
            </Heading>
          </div>
        </div>
      </Box>
      <Heading as="h2" size="lg" className="my-4" color="gray.700">
        Celulares más vendidos
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {telefonosMasVendidos[0].map((telefono) => (
          <TelefonoCard telefono={telefono} key={telefono.id} />
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
