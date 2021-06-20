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
  Flex,
  Button,
} from "@chakra-ui/react";

const detalleVenta = [
  {
    producto: "Redmi Note 8 Pro",
    cantidad: 4,
    total: 2500,
    id: 1,
  },
  {
    producto: "Redmi Note 8 Pro",
    cantidad: 4,
    total: 2500,
    id: 2,
  },
  {
    producto: "Redmi Note 8 Pro",
    cantidad: 4,
    total: 2500,
    id: 3,
  },
];

const VentaDetalleTable = () => {
  return (
    <div>
      <Table variant="striped" colorScheme="purple">
        <Thead>
          <Tr>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th isNumeric>Total</Th>
            <Th isNumeric>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {detalleVenta.map((detalle) => (
            <Tr key={detalle.id}>
              <Td>{detalle.producto}</Td>
              <Td>{detalle.cantidad}</Td>
              <Td isNumeric>{detalle.total}</Td>
              <Td isNumeric>
                <Button size="sm" colorScheme="red">
                  Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default VentaDetalleTable;
