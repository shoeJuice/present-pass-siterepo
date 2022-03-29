import React from 'react'

import { FormControl, 
    FormLabel,
    FormErrorMessage,
    FormHelperText, GridItem, Text, Box, Input, Button } from '@chakra-ui/react'


const ContactForm = (props) => {
  return (
    <GridItem
        textAlign="left"
        colStart={7}
        rowStart={4}
        colSpan={4}
        rowSpan={4}
        
        {...props}
    >
        <Text
            fontSize='2xl'
            fontWeight='medium'
        >
            Join Our Mailing List!
        </Text>
        <Box
            boxShadow='base'
            padding={5}
            borderRadius={6}
        >
            <FormControl>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input></Input>
                <FormLabel marginTop={2} htmlFor='lastName'>Last Name</FormLabel>
                <Input></Input>
                <FormLabel marginTop={2} htmlFor='email'>E-Mail Address</FormLabel>
                <Input placeholder='@youremailhere.com'></Input>
                <Button marginTop={2}>Submit</Button>
            </FormControl>
        </Box>
    </GridItem>
  )
}

export default ContactForm