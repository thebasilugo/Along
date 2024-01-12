import { CheckboxProps, RadioProps, SwitchProps } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps } from '@mui/material/TextField';

export interface InputProps
  extends Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, 'variant'> {
  placeholder?: string;
  name: string;
  countError?: boolean;
  options?: Array<Options>;
  show?: boolean;
  checked?: boolean;
  loading?: boolean;
  onInputChange?: any;
  emptyValue?: string;
  multiple?: boolean;
  handleChipView?: (value: string) => void;
}
export interface Options {
  key: any;
  value: any;
  label?: any;
}
export interface SelectProps extends SelectInputProps {
  options: Array<Options>;
  placeholder?: string;
  name: string;
}
export interface SwitchProp extends SwitchProps {
  name: string;
  label?: React.ReactNode | string;
}
export interface CheckBoxProp extends CheckboxProps {
  label?: string;
  name: string;
}
export interface FormikControlProps extends InputProps {
  control?:
    | 'autoComplete'
    | 'singleAutoComplete'
    | 'autoSelect'
    | 'input'
    | 'textarea'
    | 'select'
    | 'file'
    | 'radio'
    | 'checkbox'
    | 'phone'
    | 'switch'
    | 'files'
    | 'date';
}
export interface RadioProp extends RadioProps {
  label?: string;
  name: string;
}
