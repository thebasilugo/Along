import { FC } from 'react';
import { FormikControlProps } from './types';
import Input from './Input';
import SelectComponent from './Select';
import CheckBox from './Checkbox';
import RadioGroup from './Radio';
import SwitchComponent from './Switch';
import Autocompletes from './AutoComplete';
import SingleAutocompletes from './SingleAutoComplete';
import AutoSelect from './AutoSelect';

const FormikControl: FC<FormikControlProps> = ({ control, name, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input name={name} {...rest} />;
    case 'select':
      return <SelectComponent name={name} {...rest} />;
    case 'checkbox':
      return <CheckBox name={name} {...rest} />;
    case 'switch':
      //@ts-expect-error not neccessary
      return <SwitchComponent name={name} {...rest} />;
    case 'radio':
      return <RadioGroup name={name} {...rest} />;
    case 'autoComplete':
      return <Autocompletes name={name} {...rest} />;
    case 'autoSelect':
      return <AutoSelect name={name} {...rest} />;
    case 'singleAutoComplete':
      return <SingleAutocompletes name={name} {...rest} />;
    default:
      return null;
  }
};

FormikControl.defaultProps = {
  control: 'input',
};
export default FormikControl;
