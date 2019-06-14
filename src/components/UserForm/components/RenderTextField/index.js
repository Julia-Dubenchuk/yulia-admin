import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderTextField = ({ label, input }) => (
  <TextField
    label={label}
    placeholder={label}
  />
);

export default RenderTextField;