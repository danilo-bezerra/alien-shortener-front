import { Box, BoxProps, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { shortenedLink } from "../models/shortenedLink";
import { api } from "../services/api";
import { Button } from "./Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = BoxProps & {
  shortened: shortenedLink;
};

export default function ShortenedLink({ shortened, ...props }: Props) {
  const [copied, setCopied] = useState(false);
  const link = location.host + "/" + shortened.surname;

  return (
    <Box
      bg="white"
      p={4}
      display="flex"
      alignItems={{
        md: "center",
      }}
      flexDirection={{
        base: "column",
        md: "row",
      }}
      gap={{
        md: 8,
        base: 4,
      }}
      spacing={2}
      rounded="md"
      boxShadow="md"
      maxW="1100px"
      mx="auto"
      {...props}
    >
      <Stack
        spacing={0}
        w="full"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems={{
          md: "center",
        }}
        justifyContent={{
          md: "space-between",
        }}
        px={{ md: 2 }}
        gap={{
          base: 2,
        }}
      >
        <Text
          color="gray.800"
          fontSize={{
            base: "lg",
            md: "xl",
          }}
        >
          {shortened.original}
        </Text>
        <Divider
          bg="gray.400"
          display={{
            md: "none",
          }}
        />
        <Text
          color="cyan.400"
          fontSize={{
            md: "xl",
          }}
        >
          {link}
        </Text>
      </Stack>
      <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
        <Button
          w={{
            base: "full",
            md: "15%",
          }}
          bg={copied ? "cyan.600" : "cyan.400"}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </CopyToClipboard>
    </Box>
  );
}
