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
  const [showExamplePrompts, setShowExamplePrompts] = useState(true);
  const messageContainerRef = useRef(null);

  // Example prompts array
  const examplePrompts = [
    {
      text: "I have fever and headaches",
      action: () => handleExampleClick("I have fever and headaches"),
    },
    {
      text: "What are the symptoms of COVID-19?",
      action: () => handleExampleClick("What are the symptoms of COVID-19?"),
    },
    {
      text: "How do I prevent the common cold?",
      action: () => handleExampleClick("How do I prevent the common cold?"),
    },
    {
      text: "Can you provide tips for healthy eating?",
      action: () =>
        handleExampleClick("Can you provide tips for healthy eating?"),
    },
    {
      text: "How can I improve my sleep quality?",
      action: () => handleExampleClick("How can I improve my sleep quality?"),
    },
    {
      text: "What exercises are good for lower back pain?",
      action: () =>
        handleExampleClick("What exercises are good for lower back pain?"),
    },
    {
      text: "Do you have tips for managing stress?",
      action: () => handleExampleClick("Do you have tips for managing stress?"),
    },
    {
      text: "How do I boost my immune system?",
      action: () => handleExampleClick("How do I boost my immune system?"),
    },
  ];

  // Scroll to bottom of message container on new message
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setInputText("");

    try {
      // Send user message to backend API
      const response = await axios.post("/api/chatbot", {
        message: userMessage,
      });

      // Update chat messages with user input and bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
        { sender: "bot", text: response.data.response }, // Dummy response for now
      ]);

      // Hide example prompts after first message
      setShowExamplePrompts(false);
    } catch (error) {
      console.error("Chatbot API Error:", error.message);
      // Handle error if needed
    }
  };

  const handleExampleClick = (exampleText) => {
    setInputText(exampleText);
  };

  return (
    <Box
      p="4"
      bg="gray.900"
      color="white"
      boxShadow="lg"
      height="100vh"
      overflowY="auto"
      position="relative"
    >
      {/* Chatbot Heading */}
      <Heading
        as="h2"
        textAlign="center"
        size="lg"
        py={5}
        fontWeight="300"
        mb="4"
      >
        Healthcare Chatbot
      </Heading>

      {/* Chat messages display */}
      <Flex direction="column" ref={messageContainerRef}>
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
              maxW="70%"
            >
              {message.text}
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* Input area for typing messages */}
      <Flex
        position="absolute"
        bottom="12"
        left="4"
        right="4"
        align="center"
        bg="gray.700"
        borderRadius="lg"
        p="2"
      >
        <Input
          flex="1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          // variant="filled"
          size="md"
          color="gray.300"
          _placeholder={{ color: "gray.400" }}
          _focus={{ bg: "gray.800", border: "none" }}
          autoFocus
        />
        <Button
          colorScheme="blue"
          onClick={sendMessage}
          ml="2"
          borderRadius="md"
          aria-label="Send Message"
        >
          <Icon as={AiOutlineSend} />
        </Button>
      </Flex>

      {/* Chatbot tips and instructions */}
      <Text
        mt="4"
        fontSize="sm"
        color="gray.400"
        textAlign="center"
        position="absolute"
        bottom="5"
        left="50%"
        transform="translateX(-50%)"
      >
        <Icon as={AiOutlineSend} mr="1" />
        Press <strong>Send</strong> to chat with the healthcare bot.
      </Text>

      {/* Example prompts */}
      {showExamplePrompts && (
        <Box mt="8" textAlign="center">
          <Text fontSize="md" mb="2">
            You might want to know
          </Text>
          <Flex flexWrap="wrap" justifyContent="center">
            {examplePrompts.map((prompt, index) => (
              <Button
                key={index}
                py={5}
                colorScheme="blue"
                variant="outline"
                onClick={prompt.action}
                mr="2"
                mb="2"
              >
                {prompt.text}
              </Button>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Chatbot;
