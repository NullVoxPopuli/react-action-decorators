import { createMut } from "./helpers/mut";
import { createToggle } from "./helpers/toggle";
import { createPipe } from "./helpers/pipe";

// TODO:
// for deeply-nested keys, ie: 'top.sub.level.key'
// maybe implement this:
// https://github.com/NullVoxPopuli/react-state-helpers/blob/master/src/helpers/index.js#L25
export const withTemplateHelpers = (target: any) => {
  const newProperties = {
    mut: createMut(target),
    toggle: createToggle(target),
    pipe: createPipe(target)
  };

  // new constructor, kinda
  const injected = function(...args: any[]) {
    const newKeys = Object.keys(newProperties);

    newKeys.forEach(key => {
      this[key] = newProperties[key].bind(this);
    });

    return target.apply(this, args);
  };

  injected.prototype = target.prototype;

  return injected;
};
