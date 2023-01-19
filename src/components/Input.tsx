import { InputProps, Input as CInput } from "@chakra-ui/react";
import React from "react";

type Props = InputProps & {};

export default function Input({ ...rest }: Props) {
  return <CInput color="white" {...rest} />;
}
