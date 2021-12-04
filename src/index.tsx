import AppWrapper from 'app/AppWrapper'
import { store } from 'app/store'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

if (process.env.NODE_ENV === 'production') {
  const noConsole = (): void => {}
  console.log = noConsole
  console.info = noConsole
  console.warn = noConsole
  console.error = noConsole
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
