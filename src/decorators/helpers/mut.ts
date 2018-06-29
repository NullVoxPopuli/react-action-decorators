import { findValue } from "./find-value";

function isFunction(fn) {
  return typeof fn === 'function';
}

export const createMut = target => {
  return function mut(field: string, transform?: (arg1: any) => any) {
    return e => {
      const passedValue = findValue(e);
      const value = (transform && isFunction(transform))
        ? transform(passedValue)
        : passedValue;

      this.setState({ [field]: value });

      return value;
    };
  };
};
