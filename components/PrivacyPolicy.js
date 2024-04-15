import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const PrivacyPolicy = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const toast = useToast();
  const { colorMode } = useColorMode();

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    // Show toast message upon accepting terms
    toast({
      title: "Terms Accepted",
      description:
        "You have successfully accepted our privacy policy and terms.",
      status: "success",
      duration: 3000, // Toast message will disappear after 3 seconds
      isClosable: true,
    });
  };

  return (
    <Box
      p={8}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={colorMode === "dark" ? "gray.800" : "gray.50"} // Set background color based on color mode
      color={colorMode === "dark" ? "white" : "black"} // Set text color based on color mode
    >
      <Box
        maxWidth="800px"
        p={8}
        bg={colorMode === "dark" ? "gray.700" : "white"} // Set inner box background color based on color mode
        borderRadius="md"
        boxShadow="lg"
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={6}>
          Privacy Policy
        </Heading>
        <Text fontSize="lg" mb={4}>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website.
        </Text>
        <Text fontSize="lg" mb={4}>
          If you have any questions or concerns about our Privacy Policy, or if
          you would like to make any requests regarding your personal
          information, please contact us.
        </Text>
        <Heading as="h2" size="xl" mt={8} mb={4}>
          Information We Collect
        </Heading>
        <Text fontSize="lg" mb={4}>
          - When you visit our website, we may collect certain information about
          your device, browsing actions, and patterns.
        </Text>
        <Text fontSize="lg" mb={4}>
          - We may collect personal information that you voluntarily provide to
          us when contacting us or subscribing to our newsletter.
        </Text>
        <Heading as="h2" size="xl" mt={8} mb={4}>
          How We Use Your Information
        </Heading>
        <Text fontSize="lg" mb={4}>
          - We use the information we collect to improve our website, respond to
          your inquiries, and send you updates about our services.
        </Text>
        <Heading as="h2" size="xl" mt={8} mb={4}>
          Information Sharing and Disclosure
        </Heading>
        <Text fontSize="lg" mb={4}>
          - We do not sell, trade, or otherwise transfer your personal
          information to outside parties without your consent.
        </Text>
        <Text fontSize="lg" mb={4}>
          - We may share information with service providers who assist us in
          operating our website or conducting our business.
        </Text>
        {!acceptedTerms && (
          <Button
            onClick={handleAcceptTerms}
            colorScheme="blue"
            mt={8}
            size="lg"
            fontWeight="bold"
            leftIcon={<FaCheckCircle />}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Accept Terms
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
