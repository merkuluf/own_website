import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
