import React from 'react'

import { FormControl, 
    FormLabel,
    FormErrorMessage,
    FormHelperText, GridItem, Text } from '@chakra-ui/react'


const ContactForm = (props) => {
  return (
    <GridItem
        textAlign="center"
        boxShadow='base'
        padding={5}
        colStart={7}
        rowStart={4}
        colSpan={4}
        rowSpan={4}
        
        {...props}
    >
        <Text>Join our mailing list!</Text>
        <FormControl
            borderRadius={6}
        >
            {props.children}
        </FormControl>
    </GridItem>
  )
}

export default ContactForm