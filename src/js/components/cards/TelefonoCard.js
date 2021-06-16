import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const TelefonoCard = () => {
  return (
    <Box boxShadow="xl" p="4" rounded="lg" bg="white">
      <Heading size="md" color="purple" py={2}>
        Redmi note 8 pro
      </Heading>

      <Text size="lg" color="purple">
        Xiaomi
      </Text>

      <Heading size="md" color="green" className="text-end">
        <FiShoppingCart className="d-inline" /> 1,232
      </Heading>
    </Box>
  );
};

export default TelefonoCard;
