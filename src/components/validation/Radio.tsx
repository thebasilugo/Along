import { FormControlLabel, Grid, Radio } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';

import TextError from './TextError';
import { RadioProp, InputProps } from './types';

const RadioButton: FC<RadioProp> = ({ label, name, value, ...rest }) => {
  return (
    <FormControlLabel
      label={label}
      sx={{
        '& .MuiFormControlLabel-label': {
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          fontWeight: 400,
        },
      }}
      control={
        <Radio
          name={name}
          value={value} // Make sure to include the value prop here
          {...rest}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 25,
            },
          }}
        />
      }
    />
  );
};

const RadioGroup = (props: InputProps) => {
  const { label, value, name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} type="radio" label={label ? label : null} name={name} as={RadioButton} value={value} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default RadioGroup;
