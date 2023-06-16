import {
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "~/assets/images/Logo.png";
import Link from "next/link";

const url = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "About",
  },
  {
    link: "#",
    label: "Promotions",
  },
  {
    link: "#",
    label: "Blogs",
  },
  {
    link: "#",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      pt="28px"
      pb="25px"
      w="full"
      zIndex={999}
      bg="white"
      alignItems="center"
    >
      <Image
        src={Logo.src}
        alt="logo"
        width={150}
        height={36}
        style={{
          objectFit: "contain",
        }}
      />
      <HStack
        spacing="32px"
        display={{
          base: "none",
          lg: "flex",
        }}
        position="relative"
        _after={{
          position: "absolute",
          content: "'HOT'",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "8px",
          color: "white",
          rounded: "full",
          lineHeight: "14px",
          fontWeight: "bold",
          width: "36px",
          height: "19px",
          bgColor: "#E7462D",
          top: -5,
          right: "165px",
        }}
      >
        {url.map(({ label, link }, idx) => (
          <ChakraLink
            _hover={{
              textDecor: "none",
            }}
            color="#757575"
            fontWeight="medium"
            fontSize="14px"
            lineHeight="22px"
            as={Link}
            key={idx}
            href={link}
          >
            {label}
          </ChakraLink>
        ))}
      </HStack>
      <HStack spacing="24px">
        <Text
          fontSize="14px"
          fontWeight="medium"
          lineHeight="22px"
          display={{
            base: "none",
            lg: "block",
          }}
          cursor="pointer"
          color="#333333"
        >
          Masuk
        </Text>
        <Button w="147px" h="42px" rounded="100px" colorScheme="primary">
          <Heading
            fontSize="14px"
            lineHeight="22px"
            color="white"
            fontWeight="medium"
          >
            Daftar Sekarang
          </Heading>
        </Button>
      </HStack>
    </Flex>
  );
};
