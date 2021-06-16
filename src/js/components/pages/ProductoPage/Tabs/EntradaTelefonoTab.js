import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Spacer
} from "@chakra-ui/react";
import EntradaDetalleTable from "../../../tables/EntradaDetalleTable";


const EntradaTelefonoTab = () => {
  return (
    <>
      <Grid templateColumns="repeat(2,1fr)" gap={6}>
        <FormControl id="Producto">
          <FormLabel>Fecha:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Usuario:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Proveedor:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Observaciones:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
      </Grid>

      <Button className="mt-3" colorScheme="teal" size="sm">
        Agregar Producto
      </Button>

      <EntradaDetalleTable/>
      <Flex className="mt-4">
        <Spacer/>
        <Button colorScheme="purple" size="md">Realizar Entrada</Button>
      </Flex>
    </>
  );
};

export default EntradaTelefonoTab;
