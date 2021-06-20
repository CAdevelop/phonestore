import React from 'react'
import {Box,Flex,Spacer,Button} from '@chakra-ui/react'
import UsuariosTable from '../../tables/UsuariosTable'

const UsuariosPage = () => {
    return (
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <Flex className="mt-5">
                <Spacer/>
                <Button colorScheme="purple">Agregar usuario</Button>
            </Flex>
            <UsuariosTable/>
        </Box>
    )
}

export default UsuariosPage
