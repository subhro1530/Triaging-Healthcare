import { useState, useRef, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  Flex,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messageContainerRef = useRef(null);

  // Scroll to bottom of message container on new message
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText) return;

    try {
      // Simulate a response from the chatbot API
      const botResponse = `Hello! You said: "${inputText}". How can I assist you today?`;

      // Update chat messages with user input and bot response
      setMessages([
        ...messages,
        { sender: "user", text: inputText },
        { sender: "bot", text: botResponse },
      ]);

      // Clear input text
      setInputText("");
    } catch (error) {
      console.error("Chatbot API Error:", error.message);
      // Handle error if needed
    }
  };

  return (
    <Box
      p="4"
      bg="gray.800"
      color="white"
      boxShadow="lg"
      height="400px" // Fixed height for message container
      overflowY="auto" // Enable vertical scroll for overflow
      ref={messageContainerRef}
    >
      {/* Chatbot Heading */}
      <Heading as="h2" size="md" mb="4">
        Healthcare Chatbot
      </Heading>

      {/* Chat messages display */}
      {messages.map((message, index) => (
        <Flex
          key={index}
          justify={message.sender === "user" ? "flex-end" : "flex-start"}
          mb="2"
        >
          <Box
            bg={message.sender === "user" ? "blue.500" : "gray.700"}
            color="white"
            p="2"
            borderRadius="lg"
          >
            {message.text}
          </Box>
        </Flex>
      ))}

      {/* Input area for typing messages */}
      <Flex mt="4">
        <Input
          flex="1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          variant="filled"
          size="md"
          bgColor="gray.700"
          color="white"
          _placeholder={{ color: "gray.400" }}
          _focus={{ bgColor: "gray.700", border: "none" }}
          mr="2"
        />
        <Button
          colorScheme="blue"
          onClick={sendMessage}
          borderRadius="md"
          aria-label="Send Message"
          size="md"
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
        >
          <Icon as={AiOutlineSend} />
        </Button>
      </Flex>

      {/* Chatbot tips and instructions */}
      <Text mt="4" fontSize="sm" color="gray.400">
        <Icon as={AiOutlineSend} mr="1" />
        Press <strong>Send</strong> to chat with the healthcare bot.
      </Text>
    </Box>
  );
};

export default Chatbot;
