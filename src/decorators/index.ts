import { createMut, createUseMut } from "./helpers/mut";
import { createToggle, createUseToggle } from "./helpers/toggle";
import { createPipe } from "./helpers/pipe";

// TODO:
// for deeply-nested keys, ie: 'top.sub.level.key'
// maybe implement this:
// https://github.com/NullVoxPopuli/react-state-helpers/blob/master/src/helpers/index.js#L25
export const withTemplateHelpers = (target: any) => {
  const newProperties = {
    mut: createMut,
    toggle: createToggle,
    pipe: createPipe,
    useMut: createUseMut,
    useToggle: createUseToggle,
  };

  Object.keys(newProperties).forEach(name => {
    const creator = newProperties[name];
    const boundAction = creator(target.prototype);

    Object.defineProperty(target.prototype, name, {
      value: boundAction,
      enumerable: false,
      configurable: false,
      writable: false
    });
  });

  return target;
};
