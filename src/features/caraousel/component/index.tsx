import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useCaraousel } from "../hook";
import bgHover from "~/assets/images/bgHoverReceipt.png";
import { CaraouselProps } from "~/@types";

const colors = [
  "primary.200",
  "secondary.bostonBlue.300",
  "secondary.sanMarino.300",
  "secondary.blush.300",
  "secondary.sushi.300",
  "primary.200",
];

export const Caraousel: React.FC<CaraouselProps> = ({ foods }) => {
  const {
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    handlePrev,
    ref,
    handleNext,
  } = useCaraousel();
  return (
    <>
      <HStack
        as={motion.ul}
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: 0,
          },
          listStyle: "none",
        }}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        margin={{
          base: "0 -32px",
          md: "0 -116px 0 0",
        }}
        cursor="grab"
        transform="auto"
      >
        {foods.map((el, idx) => (
          <Box
            key={idx}
            as={motion.li}
            bg={colors[idx]}
            userSelect="none"
            minW="230px"
            position="relative"
            display="flex"
            justifyContent="center"
            py="30px"
            alignItems="center"
            _hover={{
              _before: {
                content: "''",
                backgroundImage: bgHover.src,
                backgroundSize: "250px 175px",
                objectFit: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.2,
              },
            }}
            flexDirection="column"
            rounded="8px"
            h="175px"
          >
            <Image src={el.image} width={47} height={47} alt={el.label} />
            <Text mt="21px">{el.label}</Text>
            <Text>{el.count}</Text>
          </Box>
        ))}
      </HStack>
      <HStack
        justify="end"
        spacing="13px"
        display={{
          base: "none",
          md: "flex",
        }}
        mt="46px"
      >
        <Button
          w="113px"
          h="50px"
          colorScheme="primary"
          rounded="100px"
          onClick={handlePrev}
          leftIcon={
            <Box
              w="33px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="33px"
              rounded="full"
              bg="white"
            >
              <Icon as={IconChevronLeft} color="primary.500" boxSize={7} />
            </Box>
          }
          fontWeight="medium"
          lineHeight="18.96px"
          fontSize="16px"
        >
          PREV
        </Button>
        <Button
          onClick={handleNext}
          w="113px"
          h="50px"
          colorScheme="primary"
          fontWeight="medium"
          lineHeight="18.96px"
          rightIcon={
            <Box
              w="33px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="33px"
              rounded="full"
              bg="white"
            >
              <Icon as={IconChevronRight} color="primary.500" boxSize={7} />
            </Box>
          }
          fontSize="16px"
          rounded="100px"
        >
          Next
        </Button>
      </HStack>
    </>
  );
};
