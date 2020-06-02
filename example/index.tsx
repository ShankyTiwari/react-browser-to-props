import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import BrowserToProps from '../.';

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
