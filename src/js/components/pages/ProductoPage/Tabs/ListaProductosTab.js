import React from "react";
import { Grid, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import ListaProductosTable from "../../../tables/ListaProductosTable";
import TelefonoDescripcion from "../../../templates/descriptions/TelefonoDescripcion";

const ListaProductosTab = () => {
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        <FormControl id="Producto">
          <FormLabel>Buscar Producto:</FormLabel>
          <Input type="text" variant="flushed" focusBorderColor="purple.500" />
        </FormControl>
        <FormControl id="country">
          <FormLabel>Filtrar Por: </FormLabel>
          <Select
            placeholder="Select country"
            focusBorderColor="purple.500"
            variant="flushed"
          >
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        <FormControl id="country">
          <FormLabel>Orden: </FormLabel>
          <Select
            placeholder="Select country"
            focusBorderColor="purple.500"
            variant="flushed"
          >
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
      </Grid>

      <ListaProductosTable />

      <TelefonoDescripcion/>
    </div>
  );
};

export default ListaProductosTab;
