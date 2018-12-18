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


## Why?

For stateful components that need to handle user input, defining event handlers is verbose.

Before:
```jsx
export default class MyComponent extends Component {
  firstNameChanged = (e) => {
    this.setState([ firstName: e.target.value ]);
  }

  lastNameChanged = (e) => {
    this.setState([ lastName: e.target.value ]);
  }

  toggler = (e) => {
    this.setState({ isEnabled: e.target.checked });
  }

  render() {
    const { firstName, lastName, isEnabled } = this.state;

    return (
      <div>
        <input value={firstName} onChange={this.firstNameChanged} />
        <input value={lastName} onChange={this.lastNameChanged} />
        <input type='checkbox' checked={isEnabled} onChange={toggler} />
      </div>
    );
  }
}
```

After:

```jsx
@withTemplateHelpers
export default class MyComponent extends Component {
  render() {
    const [ firstName, firstNameChanged ] = this.useMut('text');
    const [ lastName, lastNameChanged ] = this.useMut('text');
    const [ isEnabled, toggler ] = this.toggle('isEnabled');

    return (
      <div>
        <input value={firstName} onChange={firstNameChanged} />
        <input value={lastName} onChange={lastNameChanged} />
        <input type='checkbox' checked={isEnabled} onChange={toggler} />
      </div>
    );
  }
}
```


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
    const [ text, updateText ] = this.useMut('text');
    const { pipe } = this;

    return (
      <input
        type="input"
        value={text}
        onChange={pipe([
          updateText,
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
