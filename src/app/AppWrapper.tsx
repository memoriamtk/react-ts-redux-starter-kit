import App from 'app/App'
import ErrorFallback from 'app/ErrorFallback'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

const AppWrapper: React.FC = () => {
  return (
    <React.Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default AppWrapper
