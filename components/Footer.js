// components/Footer.js

import { Box, Flex, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={8} bg="gray.800" color="white">
      <Flex justify="space-between" align="flex-start" flexWrap="wrap" px={4}>
        {/* Left part */}
        <Box flex="1" pr={4} mb={[4, 0]}>
          <Flex align="center" mb={4}>
            <Icon as={FiMapPin} mr={2} />
            <Text>1234 Street Name, City, Country</Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiPhone} mr={2} />
            <Text>+1 234 567 890</Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiMail} mr={2} />
            <Text>info@example.com</Text>
          </Flex>
        </Box>

        {/* Right part */}
        <Box flex="1">
          <Tooltip label="About us" aria-label="About us">
            <Box
              borderRadius="md"
              bg="gray.700"
              p={4}
              mb={4}
              textAlign="center"
              width="100%"
            >
              <Text fontWeight="bold">About Us</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada consequat nisi, id placerat risus luctus a.
              </Text>
            </Box>
          </Tooltip>
          <Flex>
            <Link href="#" mr={4}>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" mr={4}>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
