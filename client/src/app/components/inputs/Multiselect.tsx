import {
  Row,
  Select
} from 'antd';
import React from 'react';
import {
  BaseFieldProps,
  Field,
  Validator,
  WrappedFieldProps
} from 'redux-form';

import styles from './Multiselect.module.css';

export interface DropdownOption {
  id: string | number;
  name: string;
}

interface MultiselectWrapperProps {
  placeholder?: string;
  disabled?: boolean;
  options: DropdownOption[];
}

const renderOption = (option: DropdownOption): React.ReactElement => (
  <Select.Option key={option.id} value={option.id}>
    {option.name}
  </Select.Option>
);

const DropdownList = ({
  input,
  placeholder,
  disabled,
  options
}: WrappedFieldProps & MultiselectWrapperProps): React.ReactElement => (
  <Select
    {...input}
    mode="multiple"
    placeholder={placeholder}
    className={styles.select}
    disabled={disabled}
    filterOption
    optionFilterProp="children"
    value={input && input.value !== '' ? input.value : undefined}
    defaultActiveFirstOption={false}
    dropdownMatchSelectWidth
    onFocus={(): void => {}} // eslint-disable-line @typescript-eslint/no-empty-function
    onBlur={(): void => input.onBlur(input.value)}
  >
    {options && options.map(renderOption)}
  </Select>
);

interface OwnProps {
  name: string;
  label: string;
  placeholder?: string;
  validate?: Validator | Validator[];
}

const Multiselect = ({
  name,
  label,
  placeholder,
  disabled,
  options,
  validate
}: BaseFieldProps & OwnProps & MultiselectWrapperProps): React.ReactElement => (
  <Row>
    <label>{label}</label>
    <Field
      name={name}
      placeholder={placeholder}
      component={DropdownList}
      options={options}
      disabled={disabled}
      validate={validate}
    />
  </Row>
);

export default Multiselect;
