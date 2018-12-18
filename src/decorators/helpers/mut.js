import { findValue } from "./find-value";

function isFunction(fn) {
  return typeof fn === 'function';
}

export const createMut = target => {
  return function(...args) {
    return mut.call(this, ...args);
  };
};

export const createUseMut = target => {
  return function useMut(field, transform = undefined) {
    const muter = mut.call(this, field, transform);
    const value = this.state[field];

    return [value, muter];
  };
};

function mut(field, transform = undefined) {
  return e => {
    const passedValue = findValue(e);
    const value = (transform && isFunction(transform))
      ? transform(passedValue)
      : passedValue;

    this.setState({ [field]: value });

    return value;
  };
};
