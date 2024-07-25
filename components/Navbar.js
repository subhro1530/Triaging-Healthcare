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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaQuestionCircle,
  FaBlog,
  FaPlus,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.900", "white");
  const color = useColorModeValue("white", "gray.900");

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
      bg={bg}
      color={color}
      boxShadow="lg"
      zIndex="10"
    >
      {/* Logo and Title */}
      <Flex align="center">
        <Image src="/logo.png" alt="Logo" width="56px" mr={{ base: 0, md: 2 }} />
        <Heading
          as="h3"
          ml={-3}
          size="lg"
          fontWeight={400}
          letterSpacing={"-.1rem"}
        >
          Triaging Healthcare
        </Heading>
      </Flex>

      {/* Hamburger/Close Button */}
      <IconButton
        icon={isOpen ? <FaTimes /> : <FaBars />}
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
        aria-label="Toggle navigation"
        variant="ghost"
        color={color}
        size={{ base: "xl", md: "sm" }}
        _hover={{ bg: useColorModeValue("gray.700", "gray.200") }}
        marginLeft={2}
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
            alignItems="center"
            _hover={{ color: "teal.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Icon as={FaHome} mr={2} />
            Home
          </Link>
          <Link
            href="/enquiry"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            alignItems="center"
            _hover={{ color: "teal.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Icon as={FaQuestionCircle} mr={2} />
            Enquiry
          </Link>
          <Link
            href="/blog"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            alignItems="center"
            _hover={{ color: "teal.400" }}
            // _focus={{ boxShadow: "outline" }}
          >
            <Icon as={FaBlog} mr={2} />
            Blog
          </Link>
          <Link
            href="/whats-new"
            display="flex"
            ml={{ md: "35px" }}
            mt={{ base: "15px" }}
            alignItems="center"
            _hover={{ color: "teal.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Icon as={FaPlus} mr={2} />
            What&apos;s New
          </Link>
        </Flex>
      </Box>

      {/* Theme Toggle and Login Button */}
      <Flex alignItems="center">
        <IconButton
          aria-label="Toggle theme"
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          onClick={toggleColorMode}
          variant="ghost"
          color={color}
          _hover={{ bg: useColorModeValue("gray.700", "gray.200") }}
          mr={4}
        />
        <Button
          colorScheme="teal"
          variant="outline"
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
          mx="auto"
          onClick={handleLogin} // Handle click event to navigate to login page
          _hover={{ bg: useColorModeValue("teal.600", "teal.300") }}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
