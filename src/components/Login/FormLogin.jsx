import { Avatar, Box, Button, Grid2 } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import { TextFields } from "../TextFields";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validEmail } from "../../utils/addErrorsTextField";

const schema = yup.object({
  correoElectronico: yup
    .string()
    .required("Correo Electronico es requerido")
    .max(75, "Correo Electronico demasiado largo")
    .matches(validEmail, "Correo Electrinico invalido"),
  password: yup.string().required("Contraseña es requerido."),
});

export const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: "2rem",
      }}
    >
      <Avatar sx={{ m: 1, backgroundColor: "#A1E8A1" }}>
        <LoginIcon />
      </Avatar>
      <h1 className="title">Mi Tiendita Online</h1>
      <h1 className="title">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          label="Correo Electronico"
          type="text"
          focus
          register={register}
          name="correoElectronico"
          error={errors}
        />

        <TextFields
          label="Contraseña"
          type="password"
          register={register}
          name="password"
          error={errors}
        />

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Link to="/register">
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: "2rem", mb: "2rem" }}
              >
                ¿No tienes una cuenta?
              </Button>
            </Link>
          </Grid2>
          <Grid2 size={6}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: "2rem", mb: "2rem", padding: "1.29rem" }}
            >
              Ingresar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};
