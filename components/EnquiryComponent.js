import { useState } from "react";
import { Box, Heading, Button, Text, VStack, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const EnquiryComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocationSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        // Fetch detailed location information using OpenStreetMap Nominatim API
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        if (!geoResponse.ok) {
          throw new Error("Failed to fetch location details");
        }

        const geoData = await geoResponse.json();

        if (geoData && geoData.address) {
          const locationDetails = geoData.address;

          // Retrieve nearest hospital data based on location using Overpass API
          const overpassQuery = `
            [out:json];
            (
              node["amenity"="hospital"](around:5000, ${latitude}, ${longitude});
              way["amenity"="hospital"](around:5000, ${latitude}, ${longitude});
              relation["amenity"="hospital"](around:5000, ${latitude}, ${longitude});
            );
            out body;
            >;
            out skel qt;
          `;
          const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

          const hospitalResponse = await fetch(overpassUrl);

          if (!hospitalResponse.ok) {
            throw new Error("Failed to fetch hospital data");
          }

          const hospitalData = await hospitalResponse.json();

          if (hospitalData && hospitalData.elements && hospitalData.elements.length > 0) {
            const hospitals = hospitalData.elements
              .filter(hospital => hospital.tags)  // Ensure the tags property exists
              .map(hospital => ({
                name: hospital.tags.name || "Unknown Hospital",
                address: `${hospital.tags["addr:street"] || ""} ${hospital.tags["addr:housenumber"] || ""}`.trim(),
                phone: hospital.tags.phone || "N/A",
                email: hospital.tags.email || "N/A",
                locationDetails: {
                  city: locationDetails.city || locationDetails.town || locationDetails.village || "Unknown",
                  state: locationDetails.state || "Unknown",
                  country: locationDetails.country || "Unknown",
                  postalCode: locationDetails.postcode || "Unknown",
                },
              }));
            setNearbyHospitals(hospitals);
          } else {
            setNearbyHospitals([]);
          }
        }
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Error fetching location or hospital data:", error);
    }
  };

  return (
    <Box
      p={4}
      bg="black"
      color="white"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" mb={4}>
          Enquiry Page
        </Heading>
      </motion.div>
      <Button onClick={handleLocationSubmit} colorScheme="teal" mb={4}>
        Get Nearest Hospitals Based on Your Location
      </Button>
      {loading && <Spinner size="xl" color="teal.500" />}
      {userLocation && (
        <Box mb={4} textAlign="center">
          <Text>Your Location:</Text>
          <Text>Latitude: {userLocation.latitude}</Text>
          <Text>Longitude: {userLocation.longitude}</Text>
        </Box>
      )}
      {nearbyHospitals.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack
            spacing={4}
            overflowY="scroll"
            maxHeight="50vh"
            width="100%"
            p={4}
            bg="gray.800"
            borderRadius="md"
            boxShadow="lg"
          >
            {nearbyHospitals.map((hospital, index) => (
              <Box key={index} p={4} bg="gray.700" borderRadius="md" width="100%">
                <Heading as="h2" size="md" mb={2}>
                  {hospital.name}
                </Heading>
                <Text>Address: {hospital.address}</Text>
                <Text>Phone: {hospital.phone}</Text>
                <Text>Email: {hospital.email}</Text>
                <Box mt={2}>
                  <Text>Location Details:</Text>
                  <Text>City: {hospital.locationDetails.city}</Text>
                  <Text>State: {hospital.locationDetails.state}</Text>
                  <Text>Country: {hospital.locationDetails.country}</Text>
                  <Text>Postal Code: {hospital.locationDetails.postalCode}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </motion.div>
      )}
      {error && (
        <Box mt={4} color="red">
          <Text>Error: {error}</Text>
        </Box>
      )}
    </Box>
  );
};

export default EnquiryComponent;
