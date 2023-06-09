import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import history from './history'
import store from './store'
import App from './App'

ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
