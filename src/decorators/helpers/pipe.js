export const createPipe = target => {
  return function(actions = []) {
    return (...args) => {
      args[0].persist();
      return actions.reduce((value, curr, idx) => {
        if (idx === 0) {
          return curr(...args);
        }

        return curr(value);
      }, undefined);
    };
  };
};
