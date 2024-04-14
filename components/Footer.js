// components/Footer.js
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={8} bg="gray.800" color="white">
      <Flex
        justify="space-between"
        align="flex-start"
        flexWrap="wrap"
        px={4}
        maxW="1200px"
        mx="auto"
      >
        {/* Left part */}
        <Box flex="1" pr={[0, 4]} mb={[4, 0]}>
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
          <Flex justify="center" mb={4}>
            <Link
              href="https://www.linkedin.com/in/shaswata-saha-74b209251/"
              isExternal
            >
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </Flex>
          <Flex justify="center">
            <Text>&copy; 2024 Healthcare</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
