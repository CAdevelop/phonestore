import React from "react";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RealizarVentaTab from "./Tabs/RealizarVentaTab";
import HistorialDeVentaTab from "./Tabs/HistorialDeVentaTab";

const VentasPage = () => {
  return (
    <div>
      <Box boxShadow="lg" p="6" rounded="md" bg="white">
        <Tabs colorScheme="purple" outlineColor={false}>
          <TabList>
            <Tab>Realizar venta</Tab>
            <Tab>Historial de ventas</Tab>
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel>
              <RealizarVentaTab />
            </TabPanel>
            <TabPanel> <HistorialDeVentaTab/> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default VentasPage;
