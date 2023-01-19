import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import { LinkForm } from "./components/LinkForm";
import ShortenedLink from "./components/ShortenedLink";
import { shortenedLink } from "./models/shortenedLink";
import { urlForm } from "./models/urlForm";
import { api } from "./services/api";

function App() {
  const [shortenedLinks, setShortenedLinks] = useState<shortenedLink[]>([]);

  async function onSubmit(form: urlForm) {
    try {
      const res = await api.post("/links", {
        url: form.url,
        surname: form.surname,
      });
      setShortenedLinks((last) => [res.data, ...last]);
    } catch (e: any) {
      console.log("Erro", e);
    }
  }

  return (
    <Box minHeight="100vh" bg="gray.200">
      <Header />
      {/* */}
      <Box maxW="1440px" mx="auto" p={4}>
        <LinkForm onShorten={onSubmit} mb={4} />
        {shortenedLinks.map((s, i) => (
          <ShortenedLink shortened={s} key={i} mb={4} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
