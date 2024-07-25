import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Image,
  useMediaQuery,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaSms } from "react-icons/fa";

const EmergencyCall = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const bg = useColorModeValue("gray.900", "gray.800");
  const color = useColorModeValue("white", "gray.100");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error obtaining location", error);
          setMessage("Unable to retrieve location");
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser");
      setMessage("Geolocation not supported by this browser");
      setLoading(false);
    }
  }, []);

  const getSmsLink = () => {
    if (!location) {
      return "sms:911";
    }
    return `sms:911?body=Emergency! Please send an ambulance. My location is ${location.latitude}, ${location.longitude}`;
  };

  return (
    <Box
      bg={bg}
      color={color}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      py={8}
    >
      <Heading mb={4} size="2xl" color="red" fontWeight="400">
        Emergency Call
      </Heading>
      <Image
        src="https://media2.giphy.com/media/JpuA4gv8SsrnQ5uGUF/giphy.gif?cid=6c09b9520w2pb9xa6fwqdlp97lnxsiyso396vuyyf809lwh6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" // Replace with your image path
        alt="Emergency"
        boxSize="250px"
        mb={6}
      />
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Text fontSize="lg" mb={6} maxW="md">
            In case of an emergency, you can quickly call 911 with just one tap.
            Your safety is our priority.
          </Text>
          {location && (
            <Box>
              <Text>Your location:</Text>
              <Text fontSize="lg" color="cyan" mb={6}>
                Latitude: {location.latitude}
                <br />
                Longitude: {location.longitude}
              </Text>
            </Box>
          )}
          {isMobile ? (
            <>
              <Button
                as="a"
                href="tel:100"
                colorScheme="red"
                size="lg"
                leftIcon={<Icon as={FaPhoneAlt} />}
                _hover={{ bg: "red.600" }}
                mb={4}
              >
                Call to Book
              </Button>
              <Button
                as="a"
                href={getSmsLink()}
                colorScheme="teal"
                size="lg"
                leftIcon={<Icon as={FaSms} />}
                _hover={{ bg: "teal.600" }}
              >
                Send SMS to 911
              </Button>
            </>
          ) : (
            <Text fontSize="md" color="red" mt={6}>
              Emergency call feature is available on mobile devices only.
            </Text>
          )}
        </>
      )}
      {message && <Text mt={4}>{message}</Text>}
    </Box>
  );
};

export default EmergencyCall;
