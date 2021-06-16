import React from "react";
import { Heading, Container, Box, Text } from "@chakra-ui/react";
import TelefonoCard from "../../cards/telefonoCard";
import { Grid, GridItem } from "@chakra-ui/react";
import Sells7Days from "../../charts/Sells7Days";

const HomePage = () => {
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
        <TelefonoCard />
        <TelefonoCard />
        <TelefonoCard />
        <TelefonoCard />
        <TelefonoCard />
        <TelefonoCard />
      </Grid>
    </div>
  );
};

export default HomePage;
