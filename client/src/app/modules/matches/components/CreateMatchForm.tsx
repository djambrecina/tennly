import {
  Button,
  Col,
  Row
} from 'antd';
import InputField from 'app/components/inputs/InputField';
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
  FormErrors,
  InjectedFormProps,
  reduxForm
} from 'redux-form';
import { MatchValidator } from 'tennly-shared';

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

const validateForm = ({
  set1WinnerGames,
  set1LoserGames,
  set2WinnerGames,
  set2LoserGames,
  set3WinnerGames,
  set3LoserGames
}: CreateMatchFormValues): FormErrors<CreateMatchFormValues, string> => {
  const valid = MatchValidator.isValidResult(set1WinnerGames,
    set1LoserGames,
    set2WinnerGames,
    set2LoserGames,
    set3WinnerGames,
    set3LoserGames);

  return {
    _error: valid ? undefined : "Invalid result"
  };
};

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
            type="number"
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set2WinnerGames")}
            type="number"
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set3WinnerGames")}
            type="number"
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
            type="number"
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set2LoserGames")}
            type="number"
          />
        </Col>
        <Col span={2} offset={1}>
          <InputField
            name={generateObjectPath(FormValues, "set3LoserGames")}
            type="number"
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
  form: CREATE_MATCH_FORM,
  validate: validateForm
})(CreateMatchForm);
