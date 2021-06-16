import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import ListaProductosTab from "./Tabs/ListaProductosTab";
import AgregarTelefonoTab from "./Tabs/AgregarTelefonoTab";
import EntradaTelefonoTab from "./Tabs/EntradaTelefonoTab";
import GestionarProveedores from "./Tabs/GestionarProveedores";

const ProductoPage = () => {
  return (
    <div>
      <Box boxShadow="">
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          <Tabs colorScheme="purple">
            <TabList>
              <Tab>Lista de Productos</Tab>
              <Tab>Agregar Producto</Tab>
              <Tab>Entrada de producto</Tab>
              <Tab>Gestionar Proveedores</Tab>
            </TabList>
            <TabPanels className="mt-3">
              <TabPanel> <ListaProductosTab/> </TabPanel>
              <TabPanel> <AgregarTelefonoTab/> </TabPanel>
              <TabPanel><EntradaTelefonoTab/> </TabPanel>
              <TabPanel> <GestionarProveedores/> </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default ProductoPage;
