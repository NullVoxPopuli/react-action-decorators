export const createToggle = target => {
  return function(field: string) {
    return e => {
      const value = !this.state[field];
      this.setState({ [field]: value });

      return value;
    };
  };
};
