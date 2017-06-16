import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes/Routes';
import { createHashHistory } from 'history'
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import {getAllProducts} from './actions';
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/Home/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const history = createHashHistory()
const middleware = [ thunk ];

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(...middleware),
));

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store} >
  <Routes history={history} />
  </Provider>
 </MuiThemeProvider>,
  document.getElementById('root')
);
