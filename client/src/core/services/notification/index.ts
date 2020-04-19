import { message } from 'antd';
import * as log from 'loglevel';

export const success = (msg: string): void => {
  message.success(msg);
};

export const warning = (msg: string): void => {
  message.warning(msg);
  log.warn(msg);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorWithUserMessage = (msg: any): void => {
  if (!msg) {
    log.error('Bug with passing arguments, no message to be logged!');
  }
  log.error(msg);
  if (typeof msg === 'string') {
    message.error(msg);
  }
  else if (msg.message) {
    message.error(msg.message);
  }
  else {
    message.error('Unknown error occured. Please contact developers.');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const error = (msg: any): void => {
  if (!msg) {
    log.error('Bug with passing arguments, no message to be logged!');
  }
  log.error(msg);
};

export const info = (msg: string | {}): void => {
  log.info(msg);
};

export const debug = (msg: string): void => {
  log.debug(msg);
};
