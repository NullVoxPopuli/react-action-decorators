// stolen from
// https://github.com/NullVoxPopuli/react-state-helpers/blob/master/src/findValue.js
//
// TODO: figure out the types for this mess
//
// handles: input, checkbox, radio
export function findValue(e: Event) {
  if (e === undefined || e === null) return null;

  const target = e.target;

  if (target) {
    const { checked, value, type } = target;
    const checkable = type === "checkbox" || type === "radio";

    if (checked !== undefined && checkable) {
      const valueEmpty = value === null || value === undefined || value === "";

      if (checked && !valueEmpty) return value;

      return checked;
    }

    if (value || value === "") return value;
  }

  if (e.value) return e.value;

  return e;
}
