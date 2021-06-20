import React from "react";
import { Grid, NumberInputStepper } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Spacer,
  Button,
  Textarea,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import VentaDetalleTable from "../../../tables/VentaDetalleTable";

function RealizarVentaTab() {
  return (
    <React.Fragment>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl id="Producto">
          <FormLabel>Producto:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="text">
          <FormLabel>Stock Restante: </FormLabel>
          <Input type="text" isDisabled={true} />
        </FormControl>

        <FormControl id="Producto">
          <FormLabel>Unidades a vender:</FormLabel>
          <NumberInput
            max={64}
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

      <Flex className="mt-4 mb-5">
        <Spacer />
        <Button className="mx-3" colorScheme="orange">
          Limpiar Formulario
        </Button>
        <Button colorScheme="teal">Agregar</Button>
      </Flex>

      <VentaDetalleTable />

      <Grid templateColumns="repeat(2, 1fr)" gap={6} className="mt-5">
        <div>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <FormControl id="Producto">
              <FormLabel>Nombre del cliente:</FormLabel>
              <Input
                type="text"
                variant="flushed"
                focusBorderColor="purple.500"
              />
            </FormControl>
            <FormControl id="text">
              <FormLabel>Descuento: </FormLabel>
              <Input
                type="text"
                variant="flushed"
                focusBorderColor="purple.500"
              />
            </FormControl>
          </Grid>
          <FormControl id="text" className="mt-2">
            <FormLabel>Observaciones: </FormLabel>
            <Textarea variant="flushed" focusBorderColor="purple.500" />
          </FormControl>
        </div>
        <Flex>
          <Spacer />
          <div className="my-auto">
            <Text size="xl">SubTotal:</Text>
            <Heading size="md" color="green.600">
              $ 12,123
            </Heading>
            <Text size="xl">Total:</Text>
            <Heading size="md" color="green.600">
              $ 12,123
            </Heading>
          </div>
        </Flex>
      </Grid>

      <Flex>
        <Spacer />
        <Button colorScheme="purple" size="lg">
          Realizar Venta
        </Button>
      </Flex>
    </React.Fragment>
  );
}

export default RealizarVentaTab;
