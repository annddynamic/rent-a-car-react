import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store,{Persistor} from './state/store'
import {PersistGate} from 'redux-persist/integration/react'
// const store = createStore(
//   AllReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
    <Provider store={store}>
      <PersistGate Loading={null} persistor={Persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
