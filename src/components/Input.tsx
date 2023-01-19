import { InputProps, Input as CInput } from "@chakra-ui/react";
import React from "react";

type Props = InputProps & {};

export default function Input({ ...rest }: Props) {
  return (
    <CInput
      color="black"
      _placeholder={{
        color: "hsl(257, 7%, 63%)",
      }}
      bg="white"
      fontWeight={500}
      {...rest}
    />
  );
}
