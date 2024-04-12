// pages/index.js
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Chatbot from "@/components/Chatbot";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic for dynamic import

// const Navbar = dynamic(() => import("../components/Navbar"));
// const HeroSection = dynamic(() => import("../components/HeroSection"));
// const Chatbot = dynamic(() => import("../components/Chatbot"));

const Home = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Navbar />
      <HeroSection />
      <Chatbot />
    </ChakraProvider>
  );
};

export default Home;
