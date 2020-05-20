import { message } from 'antd';
import * as log from 'loglevel';

export const showSuccessMessage = (msg: string): void => {
  message.success(msg);
};

export const showWarningMessage = (msg: string): void => {
  message.warning(msg);
  log.warn(msg);
};

export const showErrorMessage = (msg: string, err: {}): void => {
  message.error(msg);
  log.error(msg);
  log.error(err);
};

export const logInfo = (msg: string | {}): void => {
  log.info(msg);
};

export const logDebug = (msg: string): void => {
  log.debug(msg);
};
