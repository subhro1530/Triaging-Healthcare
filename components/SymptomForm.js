import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Progress,
  Spinner,
  Center,
  Icon,
} from "@chakra-ui/react";
import { FaHeartbeat } from "react-icons/fa"; // Import an example icon (heart) from react-icons library

const SymptomForm = () => {
  const [symptoms, setSymptoms] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const handleSymptomsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/DinaSalama/symptom_to_disease_distb",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: symptoms,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch predictions");
      }

      const data = await response.json();
      setPredictions(data[0]); // Assuming data is an array of predictions
      setDisplayedIndex(0); // Reset displayed index to 0 when new predictions are fetched
    } catch (error) {
      console.error("Error predicting diseases:", error.message);
      setPredictions([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle filling the input with example symptoms
  const handleExampleClick = () => {
    const exampleSymptoms = "headache, fever";
    setSymptoms(exampleSymptoms);
  };

  // Function to load the next set of predictions
  const loadNextPredictions = () => {
    const newIndex = displayedIndex + 5;
    setDisplayedIndex(newIndex);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      bg="gray.900"
      color="white"
      p={6}
    >
      <Box width="100%" maxWidth="600px">
        <Heading
          marginTop="40px"
          mb={10}
          fontWeight={400}
          fontSize="50px"
          textAlign="center"
        >
          Symptom Checker
        </Heading>
        <form onSubmit={handleSymptomsSubmit}>
          <Input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Enter symptoms (comma-separated)"
            mb={4}
            variant="filled"
            bg="black"
            border="2px solid green"
            color="white"
          />
          <Button
            type="submit"
            colorScheme="teal"
            variant="solid"
            width="100%"
            mb={4}
          >
            Predict Diseases
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            width="100%"
            onClick={handleExampleClick}
          >
            Use Example Symptoms
          </Button>
        </form>

        {loading ? (
          <Center my={6}>
            <Spinner size="xl" color="teal" thickness="4px" />
          </Center>
        ) : (
          predictions.length > 0 && (
            <VStack spacing={4} align="stretch">
              <Heading mt={6} size="md">Top Predicted Diseases</Heading>
              {predictions
                .slice(displayedIndex, displayedIndex + 5)
                .map((prediction) => (
                  <Box key={prediction.label}>
                    <Flex justify="space-between" align="center">
                      <Text>
                        {/* Render an example icon for each disease */}
                        <Icon as={FaHeartbeat} mr={2} />
                        {prediction.label}
                      </Text>
                      <Text>{(prediction.score * 100).toFixed(2)}%</Text>
                    </Flex>
                    <Progress
                      value={prediction.score * 100}
                      size="sm"
                      colorScheme="teal"
                      mt={2}
                    />
                  </Box>
                ))}
              {/* Button to load more predictions */}
              {displayedIndex + 5 < predictions.length && (
                <Button mt={5} mb={10} colorScheme="teal" onClick={loadNextPredictions}>
                  Load More
                </Button>
              )}
            </VStack>
          )
        )}
      </Box>
    </Flex>
  );
};

export default SymptomForm;
