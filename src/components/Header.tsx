import { Box, HStack, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Logo from "../assets/logo.svg";

type Props = {};

export default function Header({ ...rest }: Props) {
  return (
    <Box px={4} py={12} mb={8}>
      <HStack justifyContent="space-between" m="auto" maxW="1280px">
        <Image src={Logo} />
        <HamburgerIcon color="gray.700" boxSize={8} />
      </HStack>
    </Box>
  );
}
