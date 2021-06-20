import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const HistorialVentaTable = () => {
  return (
    <div>
      <Table variant="striped" colorScheme="purple" className="mt-5">
        <Thead>
          <Tr>
            <Th>Fecha de la venta</Th>
            <Th>Vendedor</Th>
            <Th>Observaciones</Th>
            <Th isNumeric>Monto total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>17/6/2021</Td>
            <Td>Carlos Arcia</Td>
            <Td>Observaciones</Td>
            <Td isNumeric>$ 254.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default HistorialVentaTable;
