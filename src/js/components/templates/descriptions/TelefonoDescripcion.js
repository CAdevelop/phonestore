import React from "react";
import { Heading, Text, Flex, Grid } from "@chakra-ui/react";
import { FiBattery, FiBookmark, FiCpu, FiCode, FiCamera } from "react-icons/fi";

const TelefonoDescripcion = () => {
  return (
    <div className="my-5">
      <Flex>
        <Heading size="lg" color="purple.600">
          Redmi Note 8 Pro
        </Heading>
      </Flex>

      <div className="mt-3">
        <Flex>
          <Heading size="md">
            <FiBookmark className="d-inline" /> {"Xiaomi"}
          </Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">
            <FiCpu className="d-inline" /> {"Snapdragon 820"}
          </Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">
            <FiCode className="d-inline" /> {"Android 11"}
          </Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">RAM {"4 GB"}</Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">
            <FiBattery className="d-inline" /> {"5020 mAh"}
          </Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">
            <FiCamera className="d-inline" /> {"48MP+8MP+2MP+2MP Frontal"}
          </Heading>
        </Flex>
        <Flex className="my-2">
          <Heading size="md">
            <FiCamera className="d-inline" /> {"13MP Trasera"}
          </Heading>
        </Flex>
      </div>
    </div>
  );
};

export default TelefonoDescripcion;
