// components/HeroSection.js
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Healthcare Chatbot";
    }
  }, []);

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

      {/* Content Overlay (Optional) */}
      <Box
        zIndex={1}
        textAlign="center"
        color="white"
        textShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
      >
        {/* Add your content here (e.g., headings, text) */}
        <h1>Welcome to Your Healthcare Chatbot</h1>
        <p>Get instant responses to your health queries.</p>
        <p>Assess the severity of your symptoms.</p>
        <p>Click here in case of emergency!</p>
      </Box>
    </Box>
  );
};

export default HeroSection;
