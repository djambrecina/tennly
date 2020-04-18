import { Row } from 'antd';
import InputField from 'app/components/inputs/InputField';
import generateObjectPath from 'core/services/generateObjectPath';
import React from 'react';
import {
  InjectedFormProps,
  reduxForm
} from 'redux-form';

import { CREATE_PLAYER_FORM } from '../constants';
import {
  CreatePlayerFormValues,
  FormValues
} from '../types';

type Props = InjectedFormProps<CreatePlayerFormValues>;

const CreatePlayerForm: React.FunctionComponent<Props> = () => (
  <form>
    <Row>
      <label>First name</label>
      <InputField name={generateObjectPath(FormValues, "firstName")} />
    </Row>
    <Row>
      <label>Last name</label>
      <InputField name={generateObjectPath(FormValues, "lastName")} />
    </Row>
  </form>
);

export default reduxForm<CreatePlayerFormValues>({
  form: CREATE_PLAYER_FORM
})(CreatePlayerForm);
