import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import { FC } from 'react';
import { CheckBoxProp, InputProps } from './types';
const Switchs: FC<CheckBoxProp> = ({ label, name, ...rest }) => {
  return (
    <FormControlLabel
      label={label}
      sx={{
        '& .MuiFormControlLabel-label': {
          fontSize: { xs: '1rem', md: '1.2rem' },
          fontWeight: 400,
        },
      }}
      control={
        <Checkbox
          name={name}
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

const CheckBox = (props: InputProps) => {
  const { name, value, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} type="checkbox" value={value} name={name} as={Switchs} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default CheckBox;
