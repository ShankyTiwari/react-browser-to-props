# react-browser-to-props
A HOC Components with Web API support for React Components

## Why react-browser-to-props?

The main goal of this package is to deliver High Order Component which consumes daily use WebAPIs such as LocalStorage, Cookie Storage, and some common utility functions such as reading the query params, that can fit into any kind of project with no muss, no fuss. 

## Demo

Check the Month picker in action, [click here](https://stackblitz.com/edit/react-n3swqy).

## Install
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

#### NPM
```bash
npm install --save react-browser-to-props
```
#### YARN
```          
yarn add --save react-browser-to-props
```

## Usage

```tsx

import BrowserToProps from 'react-browser-to-props';

const App = (props) => {
  console.log(props)
  return (
    <div>
      Check the console
    </div>
  );
};

const NewComponent = BrowserToProps(App);

ReactDOM.render(
  <NewComponent />,
  document.getElementById('root')
);
```

## Thanks

This Project is build using [tsdx](https://github.com/jaredpalmer/tsdx).

## License

MIT © [ShankyTiwari](https://github.com/ShankyTiwari)
