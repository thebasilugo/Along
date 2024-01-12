import { FC, Fragment } from 'react';
import { CircularProgress, Grid, Autocomplete, Chip, TextField, Stack } from '@mui/material';
import { InputProps, Options } from './types';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import TextError from './TextError';

interface AutocompleteProp {
  options?: Array<Options>;
  label?: string;
  placeholder?: string;
  loading?: boolean;
  disabled: boolean;
  defaultValue?: string[];
  name: string;
  onInputChange?: any;
  emptyValue?: string;
  handleChipView?: (option: Options) => void;
  multiple: boolean;
}
const AutocompletesComponent: FC<AutocompleteProp> = ({
  name,
  defaultValue,
  loading,
  label,
  options,

  onInputChange,
  placeholder,
  multiple,
  disabled,
  handleChipView,
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Autocomplete
        multiple={multiple}
        disabled={disabled}
        // @ts-expect-error  dont worry
        name={name}
        id="tags-filled"
        getOptionLabel={(option) => option}
        options={(options || []).map((option) => option.key)}
        defaultValue={defaultValue || []}
        noOptionsText={'NO Value Available'}
        onInputChange={onInputChange ? onInputChange : null}
        onChange={(_, newValue) => {
          //@ts-expect-error error
          const x = newValue?.map((itemA) => {
            const matchingItemsB = options?.filter((itemB) => itemB.key === itemA);
            return matchingItemsB?.[0]?.value ?? null;
          });
          // console.log(x);
          setFieldValue(name, x);
        }}
        filterOptions={(x) => x}
        // {...rest}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => {
            return (
              <Chip
                variant="outlined"
                //@ts-ignore
                onClick={handleChipView ? () => handleChipView(option) : undefined}
                sx={{ bgcolor: '#EBFDC9', mr: 0.5, fontSize: '1.4rem', fontWeight: 400 }}
                label={option}
                {...getTagProps({ index })}
                key={index}
              />
            );
          })
        }
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
                  {loading ? <CircularProgress color="primary" size={15} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
        // {...rest}
      />
    </Stack>
  );
};
AutocompletesComponent.defaultProps = {
  loading: false,
  disabled: false,
  emptyValue: 'No Value Available',
  multiple: true,
};

const Autocompletes = (props: InputProps) => {
  const { name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} type="search" name={name} as={AutocompletesComponent} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default Autocompletes;
