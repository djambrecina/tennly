import {
  Input,
  InputNumber
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
}: WrappedFieldProps & { inputProps: InputProps }): React.ReactNode => (
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
}: WrappedFieldProps & { inputProps: InputNumberProps }): React.ReactNode => (
  <InputNumber
    {...input}
    {...inputProps}
    {...rest}
  />
);

interface InputFieldProps {
  name: string;
  validate?: Validator | Validator[];
}

type Props = InputProps & InputFieldProps;

const parseNumber = (val: number | string): number => +val;

const InputField = ({ name, validate, ...rest }: Props): JSX.Element => {
  const numberField = rest.type === 'number';

  return (
    <Field
      name={name}
      validate={validate}
      component={numberField ? WrappedInputNumber : WrappedInput}
      inputProps={rest}
      parse={numberField ? parseNumber : undefined}
    />
  );
};

export default InputField;
