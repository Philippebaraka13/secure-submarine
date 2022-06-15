import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';
import rootReducer from './redux/reducers/_root.reducer';
import { applyMiddleware } from 'redux';
import rootSaga from './redux/sagas/_root.saga';

// const sagaMiddleware = createSagaMiddleware();
// const middlewareList = process.env.NODE_ENV === 'development'?
// [sagaMiddleware, logger]  :
// [sagaMiddleware];

// const store = createStore(

//   rootReducer, 
//   applyMiddleware(...middlewareList), 
// );
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
