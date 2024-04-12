// components/HeroSection.js
import { Box, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box p="8" bg="gray.900" color="white">
      <Heading as="h2" size="xl" mb="4">
        Welcome to My Next.js App
      </Heading>
      <Text fontSize="lg">This is a cool and dark-themed Next.js website.</Text>
    </Box>
  );
};

export default HeroSection;
