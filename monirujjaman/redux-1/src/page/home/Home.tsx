import { Center, Container, Heading, VStack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../redux/state";

const Home = () => {
  const dispatch = useDispatch();
  const {Increment, Decrement} = bindActionCreators(actionCreators, dispatch);
  const counter = useSelector((state: State) => state.counter);
  return (
    <Container>
      <Center height="100vh">
        <VStack>
          <Heading>Counter: {counter}</Heading>
          <Button colorScheme='blue' onClick={() => Increment(1)}>Increment</Button>
          <Button colorScheme='red' onClick={() => Decrement(1)}>Decrement</Button>
        </VStack>
      </Center>
    </Container>
  );
};

export default Home;
