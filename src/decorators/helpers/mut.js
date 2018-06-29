import { findValue } from "./find-value";

function isFunction(fn) {
  return typeof fn === 'function';
}

export const createMut = target => {
  return function mut(field, transform = undefined) {
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
