import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

type Props = {};

export function Redirector({}: Props) {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const getLink = async () => {
      try {
        console.log(pathname);
        const res = await api.get(`/links${pathname}`);
        window.location = res.data?.original;
      } catch (e) {
        console.log("Não encontrado" + e);
      }
    };

    getLink();
  }, []);

  return <Box bg="#202124" minH="100vh"></Box>;
}
