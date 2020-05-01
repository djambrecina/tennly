import {
  Row,
  Select as AntdSelect
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

interface SelectWrapperProps {
  placeholder?: string;
  disabled?: boolean;
  options: DropdownOption[];
}

const renderOption = (option: DropdownOption): React.ReactElement => (
  <AntdSelect.Option key={option.id} value={option.id}>
    {option.name}
  </AntdSelect.Option>
);

const DropdownList = ({
  input,
  placeholder,
  disabled,
  options
}: WrappedFieldProps & SelectWrapperProps): React.ReactElement => (
  <AntdSelect
    {...input}
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
  </AntdSelect>
);

interface OwnProps {
  name: string;
  label: string;
  placeholder?: string;
  validate?: Validator | Validator[];
}

const Select = ({
  name,
  label,
  placeholder,
  disabled,
  options,
  validate
}: BaseFieldProps & OwnProps & SelectWrapperProps): React.ReactElement => (
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

export default Select;
