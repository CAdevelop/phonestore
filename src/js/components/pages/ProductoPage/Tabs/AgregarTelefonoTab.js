import React from "react";
import {
  Grid,
  FormControl,
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Spacer,
  Button
} from "@chakra-ui/react";

const AgregarTelefonoTab = () => {
  return (
    <>
      <Grid templateColumns="repeat(2,1fr)" gap={6}>
        <FormControl id="Producto">
          <FormLabel>Nombre:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Procesador:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Sistema Operativo:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Marca:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Bateria (mAh):</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>RAM (GB):</FormLabel>
          <NumberInput
            max={10000}
            min={0}
            variant="flushed"
            focusBorderColor="purple.500"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Camara Principal (MP):</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Camara Frontal (MP):</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Almacenamiento (GB):</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Precio de compra $:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Precio de venta $:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="Producto">
          <FormLabel>Existencias minimas:</FormLabel>
          <NumberInput
            max={10000}
            min={1}
            variant="flushed"
            focusBorderColor="purple.500"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Grid>

      <Flex className="mt-3">
        <Spacer/>
        <Button colorScheme="orange" size="md" className="mx-3">
            Limpiar Formulario
        </Button>
        <Button colorScheme="purple" size="md">
            Agregar
        </Button>
      </Flex>
    </>
  );
};

export default AgregarTelefonoTab;
