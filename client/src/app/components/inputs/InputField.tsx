import {
  Input,
  InputNumber,
  Row
} from 'antd';
import { InputProps } from 'antd/lib/input';
import { InputNumberProps } from 'antd/lib/input-number';
import React from 'react';
import {
  Field,
  Validator,
  WrappedFieldProps
} from 'redux-form';

const WrappedInput = ({
  input,
  inputProps,
  ...rest
}: WrappedFieldProps & { inputProps: InputProps }): React.ReactElement => (
  <Input
    {...input}
    {...inputProps}
    {...rest}
  />
);

const WrappedInputNumber = ({
  input,
  inputProps,
  ...rest
}: WrappedFieldProps & { inputProps: InputNumberProps }): React.ReactElement => (
  <InputNumber
    {...input}
    {...inputProps}
    {...rest}
  />
);

interface InputFieldProps {
  name: string;
  label: string;
  validate?: Validator | Validator[];
}

type Props = InputProps & InputFieldProps;

const parseNumber = (val: number | string): number => +val;

const InputField = ({
  name,
  label,
  validate,
  ...rest
}: Props): JSX.Element => {
  const numberField = rest.type === 'number';

  return (
    <Row>
      <label>{label}</label>
      <Field
        name={name}
        validate={validate}
        component={numberField ? WrappedInputNumber : WrappedInput}
        inputProps={rest}
        parse={numberField ? parseNumber : undefined}
        autoComplete="off"
      />
    </Row>
  );
};

export default InputField;
