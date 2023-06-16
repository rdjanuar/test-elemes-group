import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { IconMenu2 } from "@tabler/icons-react";
import React from "react";

export const BottomBar = () => {
  return (
    <Box
      as="nav"
      justifyContent="space-between"
      h="89px"
      w="full"
      zIndex={999}
      display={{
        base: "flex",
        md: "none",
      }}
      left={0}
      px={8}
      position="fixed"
      alignItems="center"
      bottom={0}
      bg="white"
    >
      <VStack spacing={0}>
        <Icon as={IconMenu2} boxSize={12} color="#757575" />
        <Text fontSize="14px" lineHeight="24px" color="#757575">
          Home
        </Text>
      </VStack>
      <VStack spacing={0}>
        <Icon as={IconMenu2} boxSize={12} color="#757575" />
        <Text fontSize="14px" lineHeight="24px" color="#757575">
          Promotions
        </Text>
      </VStack>
      <VStack spacing={0}>
        <Icon as={IconMenu2} boxSize={12} color="#757575" />
        <Text fontSize="14px" lineHeight="24px" color="#757575">
          Others
        </Text>
      </VStack>
    </Box>
  );
};
