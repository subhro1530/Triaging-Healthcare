// pages/bot.js

import { Box, Heading } from "@chakra-ui/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import Chatbot from "../components/Chatbot";
// import TransparentNavbar from "@/components/Navbar";
import dynamic from "next/dynamic"; 

const Chatbot = dynamic(() => import("../components/Chatbot"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const BotPage = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Navbar />
      <Chatbot />
    </ChakraProvider>
  );
};

export default BotPage;
