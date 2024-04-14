import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

const TransparentNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg="#1a202c"
      color="#1a202c"
    >
      {/* Logo on the left */}
      <Flex w="30%" justify="center" align="center">
        <NextLink href="/">
          <Link>
            <Image src="/R.png" alt="R" width={40} height={40} />
          </Link>
        </NextLink>
      </Flex>

      {/* Hamburger menu icon for mobile */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        variant="outline"
        colorScheme="teal"
        aria-label="Toggle menu"
      />

      {/* Centered links */}
      <Box
        w={{ base: "100%", md: "40%" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        mt={{ base: 4, md: 0 }}
        color="gray"
      >
        <NextLink href="/">
          <Link mr={4} _hover={{ color: "white" }}>
            Home
          </Link>
        </NextLink>
        <NextLink href="/enquiry">
          <Link mr={4} _hover={{ color: "white" }}>
            Enquiry
          </Link>
        </NextLink>
        <NextLink href="/blog">
          <Link mr={4} _hover={{ color: "white" }}>
            Blog
          </Link>
        </NextLink>
        <NextLink href="/whats-new">
          <Link mr={4} _hover={{ color: "white" }}>
            Whats New
          </Link>
        </NextLink>
      </Box>

      {/* Purchase button on the right */}
      <Flex align="center" w="30%" justify="center">
        <Button colorScheme="teal" variant="outline">
          Purchase
        </Button>
      </Flex>
    </Flex>
  );
};

export default TransparentNavbar;
