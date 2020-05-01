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

import styles from './Select.module.css';

export interface DropdownOption {
  id: string | number;
  name: string;
}

interface SelectWrapperProps {
  placeholder?: string;
  multiple?: boolean;
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
  multiple,
  disabled,
  options
}: WrappedFieldProps & SelectWrapperProps): React.ReactElement => (
  <AntdSelect
    {...input}
    mode={multiple ? "multiple" : undefined}
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
  placeholder?: string;
  multiple?: boolean;
  validate?: Validator | Validator[];
}

const Select = ({
  name,
  placeholder,
  multiple,
  disabled,
  options,
  validate
}: BaseFieldProps & OwnProps & SelectWrapperProps): React.ReactElement => (
  <Field
    name={name}
    placeholder={placeholder}
    multiple={multiple}
    component={DropdownList}
    options={options}
    disabled={disabled}
    validate={validate}
  />
);

export default Select;
