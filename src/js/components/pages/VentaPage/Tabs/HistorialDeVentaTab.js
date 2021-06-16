import React from "react";
import { Grid } from "@chakra-ui/react";
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
  Select,
} from "@chakra-ui/react";

import HistorialVentaTable from "../../../tables/HistorialVentaTable";

const HistorialDeVentaTab = () => {
  return (
    <React.Fragment>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl id="country">
          <FormLabel>Ventas ultimo: </FormLabel>
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
          <FormLabel>Filtrar por: </FormLabel>
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

      <HistorialVentaTable/>
    </React.Fragment>
  );
};

export default HistorialDeVentaTab;
