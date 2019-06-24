import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderTextField = ({
    label,
    name,
    input,
    defaultValue,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      name={name}
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
);

export default RenderTextField;