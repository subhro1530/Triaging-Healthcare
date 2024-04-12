// components/Chatbot.js
import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    // Implement sending message logic here
    // Example: send message to backend or external service

    setInputText("");
  };

  return (
    <Box p="4" bg="gray.800" color="white">
      {/* Chat messages display */}
      {messages.map((message, index) => (
        <Box key={index}>{message}</Box>
      ))}

      {/* Input area for typing messages */}
      <Box display="flex" mt="4">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <Button ml="3" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
