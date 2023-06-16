import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import themes from "~/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
