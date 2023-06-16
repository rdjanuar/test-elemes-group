import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import Logo from "~/assets/images/Logo.png";

export const Footer = () => {
  return (
    <>
      <Box
        bg="primary.100"
        w="full"
        h="359px"
        pt="74.3px"
        pb="40px"
        display={{
          base: "none",
          md: "block",
        }}
        pl="62px"
        pr="67px"
        rounded="20px"
      >
        <Flex justify="space-between">
          <VStack spacing="21px" align="start">
            <Image
              src={Logo.src}
              alt="logo"
              width={207}
              height={50}
              style={{
                objectFit: "cover",
              }}
            />
            <Text fontSize="14px" lineHeight="20px" color="#757575" w="335px">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </Text>
            <HStack>
              <Box
                role="group"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="40px"
                h="40px"
                rounded="full"
                _hover={{
                  bg: "primary.500",
                }}
              >
                <Icon
                  as={IconMail}
                  boxSize={5}
                  color="primary.500"
                  _groupHover={{
                    color: "white",
                  }}
                />
              </Box>
              <Box
                role="group"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="40px"
                h="40px"
                rounded="full"
                _hover={{
                  bg: "primary.500",
                }}
              >
                <Icon
                  as={IconPhone}
                  boxSize={5}
                  color="primary.500"
                  _groupHover={{
                    color: "white",
                  }}
                />
              </Box>
              <Box
                role="group"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="40px"
                h="40px"
                rounded="full"
                _hover={{
                  bg: "primary.500",
                }}
              >
                <Icon
                  as={IconBrandInstagram}
                  boxSize={5}
                  color="primary.500"
                  _groupHover={{
                    color: "white",
                  }}
                />
              </Box>
            </HStack>
          </VStack>

          <VStack align="start" spacing="19px">
            <Heading
              pb="33px"
              fontSize="18px"
              fontWeight="medium"
              color="#333333"
            >
              Categories
            </Heading>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Cupcake
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Pizza
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Kebab
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Salmon
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Doughnut
            </Text>
          </VStack>
          <VStack align="start" spacing="19px">
            <Heading
              pb="33px"
              fontSize="18px"
              fontWeight="medium"
              color="#333333"
            >
              About Us
            </Heading>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              About Us
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              FAQ
            </Text>
            <Text
              fontSize="14px"
              color="#757575"
              lineHeight="16px"
              fontWeight="normal"
            >
              Report Problem
            </Text>
          </VStack>
          <VStack align="start" spacing="21px">
            <Heading
              pb="33px"
              fontSize="18px"
              fontWeight="medium"
              color="#333333"
            >
              Newsletter
            </Heading>
            <Text
              fontSize="14px"
              color="#757575"
              w="245px"
              lineHeight="24px"
              fontWeight="normal"
            >
              Get now free 50% discount for alll products on your first order
            </Text>
            <InputGroup w="250px" h="40px">
              <Input
                placeholder="Your email address"
                borderColor="black"
                borderRight="none"
                rounded="8px"
                fontSize="14px"
                type="email"
                pl="15px"
                py="8px"
                lineHeight="24px"
                color="black"
                _placeholder={{
                  textColor: "black",
                }}
              />
              <InputRightAddon
                bgColor="primary.500"
                cursor="pointer"
                textColor="white"
                border="none"
                rounded="8px"
                fontSize="14px"
                lineHeight="24px"
                fontWeight="medium"
              >
                SEND
              </InputRightAddon>
            </InputGroup>
            <VStack align="start" spacing="10px">
              <HStack spacing="2.5px">
                <Icon as={IconMail} color="primary.500" />
                <Text
                  color="black"
                  fontSize="14px"
                  lineHeight="24px"
                  fontWeight="normal"
                >
                  elemesid@gmail.com
                </Text>
              </HStack>
              <HStack spacing="2.5px">
                <Icon as={IconPhone} color="primary.500" />
                <Text
                  color="black"
                  fontSize="14px"
                  lineHeight="24px"
                  fontWeight="normal"
                >
                  0888 1111 2222
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Flex>
      </Box>
      <Box
        display={{
          base: "none",
          md: "flex",
        }}
        h="79px"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="#757575"
          letterSpacing="widest"
          textTransform="uppercase"
          fontWeight="normal"
          lineHeight="16px"
          fontSize="12px"
        >
          © 2021 Elemes id. All rights reserved
        </Text>
      </Box>
    </>
  );
};
