import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import { Provider } from 'react-redux'
import Routes from './routes'



ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.getElementById('root'));

