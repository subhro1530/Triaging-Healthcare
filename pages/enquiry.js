// pages/enquiry.js

import { ChakraProvider } from "@chakra-ui/react";
import EnquiryComponent from "../components/EnquiryComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Enquiry = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <EnquiryComponent />
      <Footer />
    </ChakraProvider>
  );
};

export default Enquiry;
