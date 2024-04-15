import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>
        Privacy Policy
      </Heading>
      <Text fontSize="lg" mb={4}>
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website.
      </Text>
      <Text fontSize="lg" mb={4}>
        If you have any questions or concerns about our Privacy Policy, or if
        you would like to make any requests regarding your personal information,
        please contact us.
      </Text>
      <Heading as="h2" size="lg" mt={8} mb={4}>
        Information We Collect
      </Heading>
      <Text fontSize="lg" mb={4}>
        - When you visit our website, we may collect certain information about
        your device, browsing actions, and patterns.
      </Text>
      <Text fontSize="lg" mb={4}>
        - We may collect personal information that you voluntarily provide to us
        when contacting us or subscribing to our newsletter.
      </Text>
      <Heading as="h2" size="lg" mt={8} mb={4}>
        How We Use Your Information
      </Heading>
      <Text fontSize="lg" mb={4}>
        - We use the information we collect to improve our website, respond to
        your inquiries, and send you updates about our services.
      </Text>
      <Heading as="h2" size="lg" mt={8} mb={4}>
        Information Sharing and Disclosure
      </Heading>
      <Text fontSize="lg" mb={4}>
        - We do not sell, trade, or otherwise transfer your personal information
        to outside parties without your consent.
      </Text>
      <Text fontSize="lg" mb={4}>
        - We may share information with service providers who assist us in
        operating our website or conducting our business.
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
