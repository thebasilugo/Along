import { FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { InputProps, Options } from './types';
import { Grid } from '@mui/material';
import TextError from './TextError';
interface FormValues {
  [key: string]: string[]; // Adjust the type according to your form structure
}

interface MultipleSelectCheckmarksProps {
  placeholder: string;
  name: string;
  options: Array<Options>;
}

const MultipleSelectCheckmarks: FC<MultipleSelectCheckmarksProps> = ({ placeholder, name, options, ...rest }) => {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setFieldValue(name, value);
  };
  return (
    <FormControl>
      <InputLabel>{placeholder}</InputLabel>
      <Select
        multiple
        //   value={values[name] ? [values[name]] : []}
        {...rest}
        size="medium"
        //   value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        //@ts-expect-error not needed
        renderValue={(selected) => (selected as string[]).join(', ')}
        //   MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            <Checkbox checked={values[name].indexOf(option.value) > -1} />
            <ListItemText primary={option.key} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
const AutoSelect = (props: InputProps) => {
  const { name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} name={name} as={MultipleSelectCheckmarks} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default AutoSelect;
