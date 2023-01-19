import { Box, BoxProps, Text } from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import { urlForm } from "../models/urlForm";
import { validateURL } from "../utils/util";
import { Button } from "./Button";
import Input from "./Input";

type Props = BoxProps & {
  onShorten: (form: urlForm) => void;
};

export function LinkForm({ onShorten, ...rest }: Props) {
  const [urlError, setUrlError] = useState(false);
  const [urlErrorMessage, setUrlErrorMessage] = useState("");
  const [form, setForm] = useState<urlForm>({ url: "", surname: "" });

  function handleChange(id: string, value: string) {
    if (urlError) {
      setUrlErrorMessage("");
      setUrlError(false);
    }
    setForm((form) => {
      return { ...form, [id]: value };
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setUrlError(false);
    setUrlErrorMessage("");
    if (!form.url) {
      setUrlError(true);
      setUrlErrorMessage("Please add a link");
      return;
    }
    if (!validateURL(form.url)) {
      setUrlError(true);
      setUrlErrorMessage("Invalid Url");
      return;
    }
    onShorten(form);
    setForm((form) => {
      return { url: "", surname: "" };
    });
  }

  return (
    <Box
      as="form"
      bg="blue.900"
      p={6}
      rounded="lg"
      onSubmit={handleSubmit}
      {...rest}
    >
      <Input
        id="url"
        value={form.url}
        onChange={({ target }) => handleChange(target.id, target.value)}
        placeholder="Shorten a link here..."
        size="lg"
        isInvalid={urlError}
        isRequired={false}
      />
      {urlError && (
        <Text fontSize="sm" color="red.400" mt={1}>
          {urlErrorMessage}
        </Text>
      )}

      <Button w="full" mt={4} type="submit">
        Shorten It!
      </Button>
      <Input
        id="surname"
        value={form.surname}
        onChange={({ target }) => handleChange(target.id, target.value)}
        placeholder="Surname (optional)..."
        size="sm"
        mt={2}
      />
    </Box>
  );
}
