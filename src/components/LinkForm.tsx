import {
  Box,
  BoxProps,
  FormControl,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import { urlForm } from "../models/urlForm";
import { validateURL } from "../utils/util";
import { Button } from "./Button";
import Input from "./Input";

import bgMobile from "../assets/bg-shorten-mobile.svg";
import bgDesktop from "../assets/bg-shorten-desktop.svg";

type Props = BoxProps & {
  onShorten: (form: urlForm) => void;
};

export function LinkForm({ onShorten, ...rest }: Props) {
  const [urlError, setUrlError] = useState(false);
  const [urlErrorMessage, setUrlErrorMessage] = useState("");
  const [form, setForm] = useState<urlForm>({ url: "", surname: "" });

  function handleChange(id: string, value: string) {
    if (urlErrorMessage) {
      setUrlErrorMessage("");
    }
    setForm((form) => {
      return { ...form, [id]: value };
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setUrlErrorMessage("");
    if (!form.url) {
      setUrlErrorMessage("Please add a link");
      return;
    }
    if (!validateURL(form.url)) {
      setUrlErrorMessage("Invalid Url");
      return;
    }
    onShorten(form);
    setForm({ url: "", surname: "" });
  }

  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row",
      }}
      alignItems="center"
      gap={4}
      as="form"
      bg="purple.900"
      px={{
        base: 6,
        md: 16,
      }}
      py={{
        base: 6,
        md: 16,
      }}
      rounded="lg"
      onSubmit={handleSubmit}
      backgroundImage={{
        base: bgMobile,
        md: bgDesktop,
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: "right top",
        md: "right bottom",
      }}
      backgroundSize={{
        md: "cover",
      }}
      {...rest}
    >
      <FormControl
        isInvalid={Boolean(urlErrorMessage)}
        minW={{
          md: "80%",
        }}
      >
        <Input
          id="url"
          type="url"
          value={form.url}
          onChange={({ target }) => handleChange(target.id, target.value)}
          placeholder="Shorten a link here..."
          size="lg"
          isRequired={false}
          h={16}
        />
        <FormErrorMessage
          position={{
            base: "relative",
            md: "absolute",
          }}
        >
          {urlErrorMessage}
        </FormErrorMessage>
      </FormControl>
      {/* <Input
        id="surname"
        value={form.surname}
        onChange={({ target }) => handleChange(target.id, target.value)}
        placeholder="surname (optional)..."
        size="sm"
        mt={4}
        maxLength={20}
        opacity={0.9}
      /> */}
      <Button w="full" type="submit" h={16}>
        Shorten It!
      </Button>
    </Box>
  );
}
