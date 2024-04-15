import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy"; // Import the PrivacyPolicy component
import { ChakraBaseProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const PrivacyPage = () => {
  return (
    <ChakraBaseProvider>
      <Navbar />
      <PrivacyPolicy />
    </ChakraBaseProvider>
  ); // Render the PrivacyPolicy component as the content of the Privacy Policy page
};

export default PrivacyPage;
