import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function App(){
    return (
        <ChakraProvider>
            <Text fontSize="2xl">React con electron</Text>
        </ChakraProvider>
        )
}
