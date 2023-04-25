import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Router } from 'react-router-dom'
import history from './history'
import store from './store'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
