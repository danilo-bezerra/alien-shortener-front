import { Box, BoxProps, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { shortenedLink } from "../models/shortenedLink";
import { api } from "../services/api";
import { Button } from "./Button";

type Props = BoxProps & {
  shortened: shortenedLink;
};

export default function ShortenedLink({ shortened, ...props }: Props) {
  const [copied, setCopied] = useState(false);
  const link = api.getUri() + "/" + shortened.surname;

  function handleCopy(link: string) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        setCopied(false);
      });
  }

  return (
    <Stack
      bg="white"
      p={4}
      alignItems="flex-start"
      spacing={2}
      rounded="md"
      {...props}
    >
      <Text color="gray.800" fontSize="lg">
        {shortened.original}
      </Text>
      <Divider />
      <Text color="cyan.400">{link}</Text>
      <Button
        w="full"
        onClick={() => handleCopy(link)}
        bg={copied ? "cyan.600" : "cyan.400"}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </Stack>
  );
}
