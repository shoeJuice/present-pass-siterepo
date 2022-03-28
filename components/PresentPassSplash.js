import React from 'react'
import {Text, Box, Flex, Button, GridItem} from '@chakra-ui/react'


const PresentPassSplash = (props) => {
  return (
    <GridItem
        rowStart={1}
        rowEnd={13}
        colSpan={4}
        bgColor='teal.500'
        color='white'
        textAlign='center'
        alignItems='center'
        padding={10}
        {...props}
    >
        <Text
            fontSize='4xl'
            fontWeight='medium'
        >
            Present Pass
        </Text>
        <Text>
            Coming Soon
        </Text>
        {props.children}
    </GridItem>
  )
}

export default PresentPassSplash