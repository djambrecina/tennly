import {
  Button,
  Row
} from 'antd';
import Select from 'app/components/inputs/Select';
import generateObjectPath from 'core/services/generateObjectPath';
import {
  getCreateMatchInfo,
  getFormLoserId,
  getFormWinnerId
} from 'core/store/matches/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  InjectedFormProps,
  reduxForm
} from 'redux-form';

import { CREATE_MATCH_FORM } from '../constants';
import styles from './CreateMatchForm.module.css';
import {
  CreateMatchFormValues,
  FormValues
} from '../types';

interface FormProps {
  onCancel: () => void;
}

type Props = InjectedFormProps<CreateMatchFormValues, FormProps> & FormProps;

const CreateMatchForm: React.FunctionComponent<Props> = ({
  invalid,
  onCancel,
  handleSubmit
}) => {
  const { players } = useSelector(getCreateMatchInfo);
  const winnerId = useSelector(getFormWinnerId);
  const loserId = useSelector(getFormLoserId);

  const winnerOptions = players.filter(p => p.id !== loserId)
    .map(p => ({
      id: p.id,
      name: `${p.firstName} ${p.lastName}`
    }));
  const loserOptions = players.filter(p => p.id !== winnerId)
    .map(p => ({
      id: p.id,
      name: `${p.firstName} ${p.lastName}`
    }));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        name={generateObjectPath(FormValues, "winnerId")}
        label="Winner"
        options={winnerOptions}
      />
      <Select
        name={generateObjectPath(FormValues, "loserId")}
        label="Loser"
        options={loserOptions}
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
};

export default reduxForm<CreateMatchFormValues, FormProps>({
  form: CREATE_MATCH_FORM
})(CreateMatchForm);
