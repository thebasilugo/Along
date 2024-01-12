import { FC, Fragment } from 'react';
import { CircularProgress, Grid, Autocomplete, TextField, Stack } from '@mui/material';
import { InputProps, Options } from './types';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import TextError from './TextError';

interface AutocompleteProp {
  options?: Array<Options>;
  label?: string;
  placeholder?: string;
  loading?: boolean;
  defaultValue?: string;
  name: string;
  onInputChange?: any;
  emptyValue?: string;
}
const AutocompletesComponent: FC<AutocompleteProp> = ({
  name,
  defaultValue,
  loading,
  label,
  options,
  emptyValue,
  onInputChange,
  placeholder,
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Autocomplete
        // name={name}
        id={name}
        getOptionLabel={(option) => option}
        options={(options || []).map((option) => option.key)}
        defaultValue={defaultValue}
        noOptionsText={emptyValue}
        onInputChange={onInputChange ? onInputChange : null}
        onChange={(_: any, newValue: string | null) => {
          options?.map((item) => {
            if (item.key === newValue) {
              setFieldValue(name, item.value);
            }
          });
        }}
        filterOptions={(x) => x}
        // {...rest}
        freeSolo
        //  renderInput={(params) => <TextField {...params} label={label} />}

        // }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? <CircularProgress color="primary" size={10} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
};
AutocompletesComponent.defaultProps = {
  loading: false,
  emptyValue: 'No Value Available',
};

const SingleAutocompletes = (props: InputProps) => {
  const { name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} type="search" name={name} as={AutocompletesComponent} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default SingleAutocompletes;
