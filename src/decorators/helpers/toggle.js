export const createToggle = target => {
  return function(field) {
    return e => {
      const value = !this.state[field];
      this.setState({ [field]: value });

      return value;
    };
  };
};
