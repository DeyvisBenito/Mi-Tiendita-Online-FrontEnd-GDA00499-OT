import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {TextFields} from '../TextFields'
import "../../styles/register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  validEmail,
  validTel,
  validYear,
} from "../../utils/addErrorsTextField";
import { Link } from "react-router-dom";

const schema = yup.object({
  nombreCompleto: yup
    .string()
    .required("Nombre Completo es requerido")
    .min(2, "Se requieren al menos 2 caracteres")
    .max(50, "50 caracteres como maximo"),
  correo: yup
    .string()
    .required("Correo Electronico es requerido")
    .email("Correo invalido")
    .matches(validEmail, "Correo invalido")
    .max(75, "Correo Electronico demasiado extenso"),
  password: yup.string().required("Contraseña es requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
  nombreComercial: yup
    .string()
    .required("Nombre comercial es requerido, puede colocar su nombre completo")
    .min(2, "Se requieren al menos 2 caracteres")
    .max(75, "75 caracteres como maximo"),
  razonSocial: yup
    .string()
    .required("Razon Social es requerido, puede colocar su nombre completo")
    .min(2, "Se requieren al menos 2 caracteres")
    .max(75, "75 caracteres como maximo"),
  telefono: yup
    .string()
    .required("Telefono es requerido")
    .matches(validTel, "Telefono invalido"),
  fechaNac: yup
    .string()
    .required("Fecha Nacimiento es requerido")
    .test("rango-año", "Año fuera de rango", (value) => validYear(value)),
  direccion: yup
    .string()
    .required("Direccion es requerido")
    .min(2, "Al menos 2 caracteres")
    .max(150, "Maximo 150 caracteres"),
});

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        flexDirection: "column",
        mt: "2rem",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "darkblue" }}>
        <PersonAddIcon />
      </Avatar>
      <h1 className="title">Registrarse</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextFields
              focus={true}
              type="text"
              label="Nombre Completo"
              register={register}
              name="nombreCompleto"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="email"
              label="Correo Electronico"
              register={register}
              name="correo"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="password"
              label="Contraseña"
              register={register}
              name="password"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="password"
              label="Confirmar Contraseña"
              register={register}
              name="confirmPassword"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="text"
              label="Nombre Comercial / Nombre Completo"
              register={register}
              name="nombreComercial"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="text"
              label="Razon Social / Nombre Completo"
              register={register}
              name="razonSocial"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="string"
              label="Telefono"
              register={register}
              name="telefono"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextFields
              type="date"
              label="Fecha de Nacimiento"
              register={register}
              name="fechaNac"
              error={errors}
            />
          </Grid2>

          <Grid2 size={12}>
            <TextFields
              type="text"
              label="Direccion"
              register={register}
              name="direccion"
              error={errors}
            />
          </Grid2>
          <Grid2 size={6}>
            <Link to="/" className="link">
              <Button
                sx={{ mb: "3rem", mt: "1rem" }}
                fullWidth
                variant="contained"
                size="large"
              >
                ¿Ya tienes una cuenta?
              </Button>
            </Link>
          </Grid2>
          <Grid2 size={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: "3rem", mt: "1rem" }}
              size="large"
            >
              Registrar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};
