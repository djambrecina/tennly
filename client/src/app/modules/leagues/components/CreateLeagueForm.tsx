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

import { CREATE_LEAGUE_FORM } from '../constants';
import styles from './CreateLeagueForm.module.css';
import {
  CreateLeagueFormValues,
  FormValues
} from '../types';

interface FormProps {
  onCancel: () => void;
}

type Props = InjectedFormProps<CreateLeagueFormValues, FormProps> & FormProps;

const CreateLeagueForm: React.FunctionComponent<Props> = ({
  invalid,
  onCancel,
  handleSubmit
}) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <InputField
      name={generateObjectPath(FormValues, "name")}
      label="Name"
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

export default reduxForm<CreateLeagueFormValues, FormProps>({
  form: CREATE_LEAGUE_FORM
})(CreateLeagueForm);
