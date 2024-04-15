import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

// Define custom theme with Montserrat font
const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif", // Use Montserrat font for body text
    heading: "Montserrat, sans-serif", // Use Montserrat font for headings
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Set up Google Fonts link */}
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        />
      </Head>

      {/* Apply custom theme and CSS reset */}
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
