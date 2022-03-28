import '../styles/globals.css'
import {ChakraProvider, theme, ColorModeScript} from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (<ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
