// pages/index.js

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic for dynamic import

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const ChatbotIntro = dynamic(() => import("../components/ChatbotIntro"), {
  ssr: false,
});
const EmergencyCall = dynamic(() => import("../components/EmergencyCall"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const SymptomForm = dynamic(() => import("../components/SymptomForm"), {
  ssr: false,
});

const Home = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Navbar />
      <HeroSection />
      <EmergencyCall />
      <ChatbotIntro />
      <SymptomForm /> {/* Add SymptomForm component here */}
      <Footer />
    </ChakraProvider>
  );
};

export default Home;
