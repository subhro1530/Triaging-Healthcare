// components/HeroSection.js
import { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Typewriter from "react-typewriter-effect";

const textContent = [
  "Get instant responses to your health queries.",
  "Assess the severity of your symptoms.",
  "Click here in case of emergency!",
];

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access DOM here safely
    //   document.title = "Healthcare Chatbot";
    }
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <Box
      p="8"
      bg="gray.900"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
      width="100vw"
      position="relative"
      overflow="hidden"
    >
      <Heading as="h2" size="xl" mb="4">
        Welcome to Your Healthcare Chatbot
      </Heading>
      <Box>
        <Typewriter
          onInit={(typewriter) => {
            textContent.forEach((text, index) => {
              typewriter
                .typeString(text)
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  if (index === textContent.length - 1) {
                    // Restart typewriter loop
                    typewriter.start();
                  }
                });
            });
          }}
          cursor="|"
          delaySpeed={50}
          deleteSpeed={50}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
