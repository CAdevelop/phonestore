import React from "react";
import { Heading, Text, Flex, Grid } from "@chakra-ui/react";
import {
  FiBattery,
  FiBookmark,
  FiCpu,
  FiCode,
  FiCamera,
  FiFolder,
  FiGrid,
} from "react-icons/fi";
import { ImMobile } from "react-icons/im";

const TelefonoDescripcion = () => {
  return (
    <div className="my-4">
      <Flex>
        <Heading size="lg" color="purple.600">
          Caracteristicas de Redmi Note 8 Pro <ImMobile className="d-inline" />
        </Heading>
      </Flex>
      <Grid templateColumns="repeat(2,1fr)">
        <div className="mt-3">
          <Flex className="my-4">
            <Heading size="md">
              <FiBookmark className="d-inline" /> {"Marca: Xiaomi"}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              <FiCpu className="d-inline" /> {"Procesador: Snapdragon 820"}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              <FiCode className="d-inline" /> {"OS: Android 11"}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              {" "}
              <FiGrid className="d-inline" /> {"RAM: 4 GB"}
            </Heading>
          </Flex>
        </div>
        <div className="mt-3">
          <Flex className="my-4">
            <Heading size="md">
              <FiBattery className="d-inline" /> {"Bateria: 5020 mAh"}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              <FiCamera className="d-inline" />{" "}
              {"Camara Frontal: 48MP+8MP+2MP+2MP"}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              <FiCamera className="d-inline" /> {"Camara Trasera: 13MP "}
            </Heading>
          </Flex>
          <Flex className="my-4">
            <Heading size="md">
              <FiFolder className="d-inline" /> {"Almacenamiento: 128 GB"}
            </Heading>
          </Flex>
        </div>
      </Grid>
    </div>
  );
};

export default TelefonoDescripcion;
