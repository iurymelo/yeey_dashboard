import {TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";

export const renderInput = ({input, label, type, meta, defaultValue}) => (
  <TextField {...input} type={type}
             variant="outlined" helperText={meta.touched && meta.error}
             error={meta.touched && meta.invalid} fullWidth
             label={label}
             value={defaultValue}
  />
);

export const renderSelectField = ({
                             input,
                             label,
                             id,
                             meta,
                             children,
                             ...custom
                           }) => {
  const name = label;
  const identificado = id;
  return (

    <FormControl error={meta.touched && meta.error} style={{width: '100%'}}>
      <InputLabel>{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: name,
          id: identificado
        }}
      >
        {children}
      </Select>
    </FormControl>
  )
};