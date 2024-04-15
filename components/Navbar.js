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
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogin = () => {
    router.push("/login"); // Navigate to the login page
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
        <Heading
          as="h3"
          ml={-3}
          size="lg"
          fontWeight={400}
          letterSpacing={"-.1rem"}
        >
          Traging Healthcare
        </Heading>
      </Flex>

      {/* Hamburger/Close Button */}
      <IconButton
        icon={isOpen ? <FaTimes /> : <FaBars />}
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
        aria-label="Toggle navigation"
        variant="ghost"
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
        <Flex
          flexDirection={{ md: "row", base: "column" }}
          spacing={4}
          align="stretch"
          mx="auto"
        >
          <Link
            href="/"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            _hover="color:blue"
            alignItems="center"
          >
            <Icon as={FaHome} mr={2} />
            Home
          </Link>
          <Link
            href="/enquiry"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            _hover="color:blue"
            alignItems="center"
          >
            <Icon as={FaQuestionCircle} mr={2} />
            Enquiry
          </Link>
          <Link
            href="/blog"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            _hover="color:blue"
            alignItems="center"
          >
            <Icon as={FaBlog} mr={2} />
            Blog
          </Link>
          <Link
            href="/whats-new"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            _hover="color:blue"
            alignItems="center"
          >
            <Icon as={FaPlus} mr={2} />
            What&apos;s New
          </Link>
        </Flex>
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
          onClick={handleLogin} // Handle click event to navigate to login page
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
