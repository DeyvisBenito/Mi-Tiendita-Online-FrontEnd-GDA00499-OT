import { NavLink } from "react-router-dom";
import { FormLogin } from "../components/Login/FormLogin";
import { useEffect } from "react";
import { Container } from "@mui/material";
import "../styles/register.css";

export const LoginPage = () => {
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
        maxWidth="sm"
        sx={{
          bgcolor: "var(--joy-palette-neutral-200, #DDE7EE)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FormLogin />
      </Container>
    </>
  );
};
