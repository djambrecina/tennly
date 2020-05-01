import {
  Button,
  Col,
  Row
} from 'antd';
import InputField from 'app/components/inputs/InputField';
import Select from 'app/components/inputs/Select';
import { required } from 'app/components/inputs/validators';
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
      <label>Winner</label>
      <Row>
        <Col span={14}>
          <Select
            name={generateObjectPath(FormValues, "winnerId")}
            options={winnerOptions}
          />
        </Col>
        <Col span={2} offset={2}>
          <InputField
            name={generateObjectPath(FormValues, "set1WinnerGames")}
            validate={required}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set2WinnerGames")}
            validate={required}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set3WinnerGames")}
            validate={required}
          />
        </Col>
      </Row>
      
      <label>Loser</label>
      <Row>
        <Col span={14}>
          <Select
            name={generateObjectPath(FormValues, "loserId")}
            options={loserOptions}
          />
        </Col>
        <Col span={2} offset={2}>
          <InputField
            name={generateObjectPath(FormValues, "set1LoserGames")}
            validate={required}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set2LoserGames")}
            validate={required}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set3LoserGames")}
            validate={required}
          />
        </Col>
      </Row>

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
