import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Link,
  Button,
  Icon,
  IconButton,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaQuestionCircle,
  FaBlog,
  FaPlus,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
      bg="gray.900"
      color="white"
    >
      {/* Logo and Title */}
      <Flex align="center">
        <Image src="/logo.png" alt="Logo" width="56px" mr={2} />
        <Heading as="h3" ml={-3} size="lg" fontWeight={400} letterSpacing={"-.1rem"}>
          Traging Healthcare
        </Heading>
      </Flex>

      {/* Hamburger/Close Button */}
      <IconButton
        icon={isOpen ? <FaTimes /> : <FaBars />}
        display={{ base: "flex", md: "none" }}
        onClick={handleToggle}
        aria-label="Toggle navigation"
        // variant="ghost"
        backgroundColor="transparent"
        color="white"
      />

      {/* Links Section */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems={{ base: "center", md: "stretch" }}
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <VStack spacing={4} align="stretch" mx="auto">
          <Link href="/" display="flex" alignItems="center">
            <Icon as={FaHome} mr={2} />
            Home
          </Link>
          <Link href="/enquiry" display="flex" alignItems="center">
            <Icon as={FaQuestionCircle} mr={2} />
            Enquiry
          </Link>
          <Link href="/blog" display="flex" alignItems="center">
            <Icon as={FaBlog} mr={2} />
            Blog
          </Link>
          <Link href="/whats-new" display="flex" alignItems="center">
            <Icon as={FaPlus} mr={2} />
            What's New
          </Link>
        </VStack>
      </Box>

      {/* Purchase Button */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        textAlign={{ base: "center", md: "right" }}
        width={{ base: "full", md: "auto" }}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          mt={{ base: 4, md: 0 }}
          mx="auto"
        >
          Purchase
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
