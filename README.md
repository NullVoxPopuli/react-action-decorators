# React Action Decorators

Remove menial event handling

## Install

```bash
npm install react-action-decorators
# or
yarn add react-action-decorators
```

## Example

```jsx
import React from 'react';
import { withTemplateHelpers } from 'react-action-decorators';

@withTemplateHelpers
export default class MyComponent extends Component {
  render() {
    const [ text, handleTextChange ] = this.useMut('text');

    return (
      <div>
        <input value={text} onChange={handleTextChange} />
      </div>
    );
  }
}
```

Demo: https://codesandbox.io/s/2067py0prn

## Available Helpers

- `mut`

  ```jsx
  render() {
    const { text } = this.state;
    const handleTextChanged = this.mut('text');

    return (
      <div>
        <input value={text} onChange={handleTextChange} />
      </div>
    );
  }
  ```

- `toggle`
  ```jsx
  render() {
    const { isEnabled } = this.state;
    const toggler = this.toggle('isEnabled');

    return (
      <div>
        <input type='checkbox' checked={isEnabled} onChange={toggler} />
      </div>
    );
  }
  ```

- `pipe`

  ```jsx
  render() {
    const { text } = this.state;
    const { pipe } = this;

    return (
      <input
        type="input"
        value={text}
        onChange={pipe([
          mut("text"),
          this.validatePipedValue,
          (value: string) => console.log(value)
        ])}
      />
    );
  }
  ```

- `useMut`

  ```jsx
  render() {
    const [ text, handleTextChange ] = this.useMut('text');

    return (
      <div>
        <input value={text} onChange={handleTextChange} />
      </div>
    );
  }
  ```

- `useToggle`

  ```jsx
  render() {
    const [ isEnabled, toggler ] = this.useToggle('isEnabled');

    return (
      <div>
        <input type='checkbox' checked={isEnabled} onChange={toggler} />
      </div>
    );
  }
  ```
