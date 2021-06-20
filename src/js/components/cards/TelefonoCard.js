import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const TelefonoCard = ({telefono}) => {
  return (
    <Box boxShadow="xl" p="4" rounded="lg" bg="white">
      <Heading size="md" color="purple" py={2}>
        {telefono.telefono}
      </Heading>

      <Text size="lg" color="purple">
        {telefono.marca}
      </Text>

      <Heading size="md" color="green" className="text-end">
        <FiShoppingCart className="d-inline" /> {telefono.ventas}
      </Heading>
    </Box>
  );
};

export default TelefonoCard;
