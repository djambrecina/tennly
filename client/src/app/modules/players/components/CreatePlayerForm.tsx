import {
  Button,
  Row
} from 'antd';
import InputField from 'app/components/inputs/InputField';
import { required } from 'app/components/inputs/validators';
import generateObjectPath from 'core/services/generateObjectPath';
import React from 'react';
import {
  InjectedFormProps,
  reduxForm
} from 'redux-form';

import { CREATE_PLAYER_FORM } from '../constants';
import styles from './CreatePlayerForm.module.css';
import {
  CreatePlayerFormValues,
  FormValues
} from '../types';

interface FormProps {
  onCancel: () => void;
}

type Props = InjectedFormProps<CreatePlayerFormValues, FormProps> & FormProps;

const CreatePlayerForm: React.FunctionComponent<Props> = ({
  invalid,
  onCancel,
  handleSubmit
}) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <InputField
      name={generateObjectPath(FormValues, "firstName")}
      label="First name"
      validate={required}
    />
    <InputField
      name={generateObjectPath(FormValues, "lastName")}
      label="Last name"
      validate={required}
    />
    <Row justify="end">
      <Button
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        htmlType="submit"
        type="primary"
        disabled={invalid}
      >
        Save
      </Button>
    </Row>
  </form>
);

export default reduxForm<CreatePlayerFormValues, FormProps>({
  form: CREATE_PLAYER_FORM
})(CreatePlayerForm);
