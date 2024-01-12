import { Select, Grid, MenuItem, FormControl, InputLabel } from '@mui/material';
import { SelectProps, InputProps } from './types';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import TextError from './TextError';
import { FC } from 'react';

type FormValues = {
  [key: string]: string;
};
const ControlledOpenSelect: FC<SelectProps> = ({ placeholder, name, options, value, ...rest }) => {
  const { errors, touched } = useFormikContext<FormValues>();

  return (
    <FormControl>
      <InputLabel id={name}>{placeholder}</InputLabel>

      <Select
        labelId={name}
        id={name}
        size="medium"
        label={placeholder}
        error={!!errors[name] && touched[name]}
        {...rest}
        name={name}
        value={value || ''}
        sx={{
          '& .MuiSelect-icon': {
            fontSize: '3rem',
            color: '#828484',
          },
        }}
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options?.map((option, index: number) => (
          <MenuItem key={index} value={option.value}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {option.label}
              {option.key}
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const SelectComponent = (props: InputProps) => {
  const { name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} name={name} {...rest} as={ControlledOpenSelect} />

      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default SelectComponent;
