// components/SymptomForm.js

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
} from "@chakra-ui/react";

const SymptomForm = () => {
  const [symptoms, setSymptoms] = useState("");
  const [predictions, setPredictions] = useState([]);

  const handleSymptomsSubmit = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      console.error("Error predicting diseases:", error.message);
      setPredictions([]);
    }
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
        <Heading marginTop="40px" mb={10} fontWeight={400} fontSize="50px"  textAlign="center">
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
        </form>

        {predictions.length > 0 && (
          <VStack spacing={4} align="stretch">
            <Heading size="md">Top Predicted Diseases</Heading>
            {predictions.map((prediction) => (
              <Box key={prediction.label}>
                <Flex justify="space-between" align="center">
                  <Text>{prediction.label}</Text>
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
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default SymptomForm;
