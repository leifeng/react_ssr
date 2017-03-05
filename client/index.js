import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,browserHistory} from 'react-router'
import routes from '../app/routes.js'
import { Provider } from 'react-redux'
import store from '../app/store/configureStore'

ReactDOM.render(<Provider store={store}>
    {routes}
</Provider>,  document.getElementById('root'))