import { ButtonProps, Button as CButton } from "@chakra-ui/react";

type Props = ButtonProps & {};

export function Button({ children, ...rest }: Props) {
  return (
    <CButton
      bg="cyan.400"
      size="lg"
      fontWeight={700}
      color="white"
      _focus={{
        bg: "cyan.300",
      }}
      _hover={{
        bg: "cyan.300",
      }}
      cursor="pointer"
      {...rest}
    >
      {children}
    </CButton>
  );
}
