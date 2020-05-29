import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { Dimmer, Loader } from 'semantic-ui-react'

import './i18n'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        }
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
