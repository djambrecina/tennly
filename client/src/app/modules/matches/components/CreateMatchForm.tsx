import {
  Button,
  Row
} from 'antd';
import React from 'react';
import {
  InjectedFormProps,
  reduxForm
} from 'redux-form';

import { CREATE_MATCH_FORM } from '../constants';
import styles from './CreateMatchForm.module.css';
import { CreateMatchFormValues } from '../types';

interface FormProps {
  onCancel: () => void;
}

type Props = InjectedFormProps<CreateMatchFormValues, FormProps> & FormProps;

const CreateMatchForm: React.FunctionComponent<Props> = ({
  invalid,
  onCancel,
  handleSubmit,
}) => (
  <form className={styles.form} onSubmit={handleSubmit}>
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

export default reduxForm<CreateMatchFormValues, FormProps>({
  form: CREATE_MATCH_FORM
})(CreateMatchForm);
