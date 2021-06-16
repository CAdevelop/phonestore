import React from 'react'
import {Button} from '@chakra-ui/react'
import ProveedoresTable from '../../../tables/ProveedoresTable'

const GestionarProveedores = () => {
    return (
        <>
            <Button colorScheme="teal" size="md">Agregar Proveedor</Button>
            <ProveedoresTable/>
        </>
    )
}

export default GestionarProveedores
