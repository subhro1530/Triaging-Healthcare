// components/Navbar.js

import { Box, Flex, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

const TransparentNavbar = () => {
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

      {/* Centered links */}
      <Flex w="40%" justify="center" align="center" color="gray">
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
      </Flex>

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
