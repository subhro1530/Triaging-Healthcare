// components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Typewriter from "react-typewriter-effect";

const textContent = [
  "Welcome to Your Healthcare Chatbot",
  "Get instant responses to your health queries.",
  "Assess the severity of your symptoms.",
  "Click here in case of emergency!",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Healthcare Chatbot";
    }
  }, []);

  const handleTypewriterComplete = () => {
    // Increment to display the next text when typewriter effect completes
    setCurrentTextIndex((prevIndex) =>
      prevIndex < textContent.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <Box
      position="relative"
      minHeight="100vh"
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

      {/* Content Overlay (Typewriter Effect) */}
      <Box
        zIndex={1}
        textAlign="center"
        color="white"
        textShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(textContent[currentTextIndex])
              .start()
              .callFunction(handleTypewriterComplete);
          }}
          options={{
            cursor: "|",
            delay: 50, // Delay between typing each character
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
