import {ChakraProvider} from '@chakra-ui/react'
import Home from './page/home/Home';

const App = () => (
  <ChakraProvider>
    <Home/>
  </ChakraProvider>
)

export default App;
