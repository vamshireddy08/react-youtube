import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import ConditionalRendering from './components/conditionalRendering';

//ReactDOM.render(<App />, document.getElementById('root'));
//instead of app component we are rendering the counter component
ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
