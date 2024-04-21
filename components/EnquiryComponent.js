import { useState } from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

const EnquiryComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestHospital, setNearestHospital] = useState(null);

  const handleLocationSubmit = async () => {
    try {
      // Fetch user's location using browser's Geolocation API
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Set user's location coordinates
        setUserLocation({ latitude, longitude });

        // Fetch detailed location information using HERE Geocoding API
        const appId = "T5h1l9lNxQ8k81DTjhCR";
        const apiKey = "reMa2vGhXhIrTCYH5xzEUDXTttQiM8-V1jPIX9Kpe6s";
        const response = await fetch(
          `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude},${longitude}&apiKey=${apiKey}`
        );
        const data = await response.json();

        if (data && data.items && data.items.length > 0) {
          const locationDetails = data.items[0].address;

          // Retrieve nearest hospital data based on location (replace with your hospital API)
          const nearestHospitalResponse = await fetch(
            `https://api.example.com/hospitals?lat=${latitude}&lon=${longitude}`
          );
          const nearestHospitalData = await nearestHospitalResponse.json();

          if (nearestHospitalData && nearestHospitalData.length > 0) {
            const firstNearestHospital = nearestHospitalData[0]; // Assuming we get the nearest hospital
            setNearestHospital({
              name: firstNearestHospital.name,
              address: firstNearestHospital.address,
              phone: firstNearestHospital.phone,
              email: firstNearestHospital.email,
              locationDetails: {
                city: locationDetails.city,
                state: locationDetails.state,
                country: locationDetails.countryName,
                postalCode: locationDetails.postalCode,
              },
            });
          } else {
            setNearestHospital(null); // Reset if no hospital found
          }
        }
      });
    } catch (error) {
      console.error("Error fetching location or hospital data:", error);
    }
  };

  return (
    <Box
      p={4}
      bg="black"
      color="white"
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" mb={4}>
        Enquiry Page
      </Heading>
      <Button onClick={handleLocationSubmit} colorScheme="teal" mb={4}>
        Get Nearest Hospital Based on Your Location
      </Button>
      {userLocation && (
        <Box mb={4} textAlign="center">
          <Text>Your Location:</Text>
          <Text>Latitude: {userLocation.latitude}</Text>
          <Text>Longitude: {userLocation.longitude}</Text>
          {nearestHospital && (
            <Box mt={4}>
              <Heading as="h2" size="md" mb={2}>
                Nearest Hospital:
              </Heading>
              <Text>Name: {nearestHospital.name}</Text>
              <Text>Address: {nearestHospital.address}</Text>
              <Box mt={2}>
                <Text>Contact Details:</Text>
                <Text>Phone: {nearestHospital.phone}</Text>
                <Text>Email: {nearestHospital.email}</Text>
              </Box>
              <Box mt={4}>
                <Text>Location Details:</Text>
                <Text>City: {nearestHospital.locationDetails.city}</Text>
                <Text>State: {nearestHospital.locationDetails.state}</Text>
                <Text>Country: {nearestHospital.locationDetails.country}</Text>
                <Text>
                  Postal Code: {nearestHospital.locationDetails.postalCode}
                </Text>
              </Box>
            </Box>
          )}
          {!nearestHospital && (
            <Text>No nearest hospital found based on your location.</Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default EnquiryComponent;
