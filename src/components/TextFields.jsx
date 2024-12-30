import React from "react";
import { TextField } from "@mui/material";
import { addError } from "../utils/addErrorsTextField";
import Box from '@mui/material/Box';
import ErrorIcon from "@mui/icons-material/Error";

export const TextFields = ({
  label,
  type,
  focus = false,
  register,
  name,
  error,
}) => {
  return (
    <>
      <TextField
        sx={{ mt: "1rem"}}
        variant="filled"
        fullWidth
        label={label}
        type={type}
        autoFocus={focus}
        {...register(name)}
        error={addError(error[name])}
      ></TextField>

      {error[name] && (
          <Box sx={{display:'flex', alignItems:'center', gap:'5px', mb:'-20px'}}>
            <ErrorIcon color="error" fontSize="small"/>
            <div className="error">{error[name].message}</div>
          </Box>
      )}
    </>
  );
};
