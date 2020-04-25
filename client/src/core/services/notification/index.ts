import { message } from 'antd';
import * as log from 'loglevel';

export const success = (msg: string): void => {
  message.success(msg);
};

export const warning = (msg: string): void => {
  message.warning(msg);
  log.warn(msg);
};

export const error = (msg: string, err: {}): void => {
  message.error(msg);
  log.error(msg);
  log.error(err);
};

export const info = (msg: string | {}): void => {
  log.info(msg);
};

export const debug = (msg: string): void => {
  log.debug(msg);
};
