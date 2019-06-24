import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioButton = ({ input, name, valueMale, valueFemale, ...rest }) => (
    <FormControl>
      <RadioGroup name={name} {...input} {...rest}>
        <FormControlLabel value={valueMale} control={<Radio />} label={valueMale} />
        <FormControlLabel value={valueFemale} control={<Radio />} label={valueFemale} />
      </RadioGroup>
    </FormControl>
);

export default RadioButton;