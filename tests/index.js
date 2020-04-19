import { withTemplateHelpers } from '../src';


class aClass {
  state = {}
  setState = (newState) => {
    this.state = { ...this.state, ...newState };
  }

  demo = () => {
    console.log('demo', this);
    const muter = this.mut('stateValue');
    const toggler = this.toggle('boolValue');
    muter(3);
    toggler('boolValue');
  }

  hookLikeDemo = () => {
    console.log('hooks-like-demo', this);
    const [text, muter] = this.useMut('text');
    const [isEnabled, toggle] = this.useToggle('isEnabled');

    muter('hi there');
    toggle();
  }
}



function showHelpers(obj) {
  console.log('mut:', obj.prototype.mut);
  console.log('toggle:', obj.prototype.toggle);
  console.log('pipe:', obj.prototype.pipe);
}


const Decorated = withTemplateHelpers(aClass);

const a = new Decorated();
console.log(a);
a.demo();
console.log(a.state);

a.hookLikeDemo();
console.log(a.state);

// const expected = {
//   stateValue: 3,
//   boolvalue: true,
//   textvalue: 'hi there',
//   isEnabled: true
// };
