// components/HeroSection.js
import { Box, Heading } from "@chakra-ui/react";
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
      minHeight="70vh"
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
        opacity={0.5} // Adjust the opacity value as needed (0.5 is 50%)
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
          size="4xl"
          color="white"
          fontWeight="bold"
          mb={{ base: "2rem", md: "0" }}
        >
          Welcome to Your
          <br />
          Healthcare Chatbot
        </Heading>
      </Box>
    </Box>
  );
};

export default HeroSection;
