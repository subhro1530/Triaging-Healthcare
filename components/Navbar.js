// components/Navbar.js
import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      p="4"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.800"
      color="white"
    >
      <Heading as="h1" size="lg">
        My Next.js App
      </Heading>
      {/* Add any additional navbar items here */}
    </Flex>
  );
};

export default Navbar;
