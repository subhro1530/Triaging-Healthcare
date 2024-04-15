import { Button, Heading, Flex, Box, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineGoogle, AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Redirect to Google OAuth consent screen
    window.location.href = "/api/auth/google";
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg="gray.800" // Set background color to dark gray
      px={4}
    >
      <Box
        maxW="lg"
        p={8}
        bg="gray.700" // Set background color to a darker shade
        borderRadius="md"
        boxShadow="xl"
        textAlign="center"
      >
        <Heading as="h1" size="xl" fontWeight={500} mb={6} color="white">
          {" "}
          {/* Set heading color to white */}
          Login to Triaging Healthcare!
        </Heading>
        <Button
          leftIcon={<AiOutlineGoogle />}
          colorScheme="blue"
          size="lg"
          onClick={handleLogin}
          w="100%"
          mb={4}
        >
          Login with Google
        </Button>
        <Flex justifyContent="center" mb={4}>
          {/* Additional icons for social login */}
          <IconButton
            icon={<FaFacebook />}
            colorScheme="blue"
            aria-label="Login with Facebook"
            size="lg"
            mr={4}
          />
          <IconButton
            icon={<FaTwitter />}
            colorScheme="blue"
            aria-label="Login with Twitter"
            size="lg"
          />
        </Flex>
        <Flex justifyContent="center">
          {/* Additional icons for user authentication */}
          <IconButton
            icon={<AiOutlineUser />}
            colorScheme="whiteAlpha"
            aria-label="Username"
            size="lg"
            mr={4}
          />
          <IconButton
            icon={<AiOutlineLock />}
            colorScheme="whiteAlpha"
            aria-label="Password"
            size="lg"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
