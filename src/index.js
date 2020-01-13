import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
