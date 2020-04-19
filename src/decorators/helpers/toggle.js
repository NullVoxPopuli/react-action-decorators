export const createToggle = target => {
  return toggle;
};

export const createUseToggle = target => {
  return function useToggle(field) {
    const toggler = toggle.call(this, field);
    const value = this.state[field];

    return [value, toggler];
  }
}

function toggle(field) {
  return e => {
    const value = !this.state[field];
    this.setState({ [field]: value });

    return value;
  };
};
