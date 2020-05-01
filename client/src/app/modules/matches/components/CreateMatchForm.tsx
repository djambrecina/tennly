import {
  Button,
  Row
} from 'antd';
import Select from 'app/components/inputs/Select';
import generateObjectPath from 'core/services/generateObjectPath';
import React from 'react';
import {
  InjectedFormProps,
  reduxForm
} from 'redux-form';

import { CREATE_MATCH_FORM } from '../constants';
import { CreateMatchViewModel } from '../../../../../../shared/types/match';
import styles from './CreateMatchForm.module.css';
import {
  CreateMatchFormValues,
  FormValues
} from '../types';

interface FormProps {
  createMatchInfo: CreateMatchViewModel;
  onCancel: () => void;
}

type Props = InjectedFormProps<CreateMatchFormValues, FormProps> & FormProps;

const CreateMatchForm: React.FunctionComponent<Props> = ({
  createMatchInfo,
  invalid,
  onCancel,
  handleSubmit,
}) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <Select
      name={generateObjectPath(FormValues, "winnerId")}
      label="Winner"
      options={createMatchInfo.players.map(p => ({
        id: p.id,
        name: `${p.firstName} ${p.lastName}`
      }))}
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

export default reduxForm<CreateMatchFormValues, FormProps>({
  form: CREATE_MATCH_FORM
})(CreateMatchForm);
