# React Action Decorators

Remove menial event handling

## Example

```js
import React from 'react';
import { withTemplateHelpers } from 'react-action-decorators';

@withTemplateHelpers
export default class MyComponent extends Component {
    render() {
        const { mut } = this;
        const { text } = this.state;

        return (
            <div>
              <input value={text} onChange={mut('text')} />
            </div>
        );
    }
}
```


## Available Helpers

- `mut`
- `toggle`
- `pipe`
