// pages/index.js
import { ChakraProvider, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.900" color="white" minHeight="100vh">
        <Navbar />
        <Container maxW="container.lg" py="8">
          <HeroSection />
          <Chatbot />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
