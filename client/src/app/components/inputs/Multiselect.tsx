import { Select } from 'antd';
import React from 'react';
import {
  BaseFieldProps,
  Field,
  Validator,
  WrappedFieldProps
} from 'redux-form';

const { Option } = Select;

const DEFAULT_VALUE = 'defaultValue';

export interface DropdownOption {
  id: string;
  name: string;
}

interface MultiselectWrapperProps {
  disabled?: boolean;
  defaultValue?: string;
  options: DropdownOption[];
}

const renderOption = (option: DropdownOption): React.ReactElement => (
  <Option key={option.id} value={option.id}>
    {option.name}
  </Option>
);

const DropdownList = ({
  input,
  disabled,
  defaultValue,
  options
}: WrappedFieldProps & MultiselectWrapperProps): React.ReactElement => (
  <Select
    {...input}
    mode="multiple"
    placeholder="Select option"
    disabled={disabled}
    filterOption
    optionFilterProp="children"
    value={input && input.value !== '' ? input.value : undefined}
    defaultActiveFirstOption={false}
    dropdownMatchSelectWidth
  >
    {defaultValue && (
      <Option key={DEFAULT_VALUE} value={DEFAULT_VALUE}>
        {defaultValue}
      </Option>
    )}
    {options && options.map(renderOption)}
  </Select>
);

interface OwnProps {
  name: string;
  validate?: Validator | Validator[];
}

const Multiselect = ({
  name,
  disabled,
  defaultValue,
  options,
  validate
}: BaseFieldProps & OwnProps & MultiselectWrapperProps): React.ReactElement => (
  <Field
    name={name}
    component={DropdownList}
    options={options}
    disabled={disabled}
    defaultValue={defaultValue}
    validate={validate}
  />
);

export default Multiselect;
