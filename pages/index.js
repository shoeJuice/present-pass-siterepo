import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PresentPassSplash from '../components/PresentPassSplash'
import ContactForm from '../components/ContactForm'

import {Flex, Box, Button, Input, Grid, GridItem, VStack, Text, ColorModeScript, theme} from '@chakra-ui/react'


export default function Home() {
  return (
    <Box>
      <Head>
        <title>Welcome to Present Pass</title>
      </Head>
      <Grid
        width='100vw'
        height='100vh'
        templateRows='repeat(12, 1fr)'
        templateColumns='repeat(12, 1fr)'
      >
        <PresentPassSplash>
          <VStack marginTop='4ex' spacing={4}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum commodi. Perspiciatis eligendi veniam dolore quaerat suscipit pariatur molestiae consequuntur eaque odit, quis fuga nulla, id natus! Sed, doloremque corrupti.</Text>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eum suscipit itaque iste facere, accusamus praesentium reiciendis alias modi explicabo distinctio tempora vero necessitatibus sint, dolores ut numquam. Eos, velit?</Text>
          </VStack>
        </PresentPassSplash>
        <ContactForm></ContactForm>
      </Grid>
    </Box>
  )
}
