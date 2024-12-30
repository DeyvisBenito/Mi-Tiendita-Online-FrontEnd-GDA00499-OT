import React, { useEffect } from "react";
import { FormRegister } from "../components/register/FormRegister";
import { Container } from "@mui/material";
import "../styles/register.css";

export const RegisterPage = () => {
  useEffect(() => {
    // Agregar la clase al body
    document.body.classList.add("fondo-login-body");

    // Limpiar la clase cuando se desmonte el componente
    return () => {
      document.body.classList.remove("fondo-login-body");
    };
  }, []);

  return (
    <>
      <Container
        maxWidth="md"
        sx={{ bgcolor: "var(--joy-palette-neutral-200, #DDE7EE)" }}
      >
        <FormRegister />
      </Container>
    </>
  );
};
