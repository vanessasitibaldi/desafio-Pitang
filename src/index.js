import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import store from './Store';
import { Provider } from 'react-redux'



ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));

