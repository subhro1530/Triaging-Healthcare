// components/HeroSection.js
import { Box,Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Healthcare Chatbot";
    }
  }, []);

  return (
    <Box
      position="relative"
      minHeight="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity={0.7} // Adjust the opacity value as needed (0.5 is 50%)
      />

      {/* Content Overlay */}
      <Box
        zIndex={1}
        textAlign="center"
        color="white"
        textShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
        padding={{ base: "0 1rem", md: "0 4rem" }}
        width="100%"
      >
        {/* Heading Section (Left) */}
        <Heading
          as="h1"
          size="2xl"
          letterSpacing="5px"
          color="white"
          fontWeight="400"
          textTransform="uppercase"
          mb={{ base: "2rem", md: "0" }}
        >
          Discover health insights with <br />
        </Heading>
        <Heading
          mt={5}
          size="lg"
          letterSpacing="20px"
          color="cyan.300"
          as="h1"
          fontWeight="400"
          textTransform="uppercase"
          mb={{ base: "2rem", md: "0" }}
        >
          symptom detection
        </Heading>
      </Box>
    </Box>
  );
};

export default HeroSection;
