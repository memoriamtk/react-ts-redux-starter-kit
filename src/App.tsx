import Index from 'components/pages/Index'
import PAGE_PATH from 'constants/pagePath'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={PAGE_PATH.INDEX} exact>
          <Index />
        </Route>
        <Route path={PAGE_PATH.ERROR} exact>
          error
        </Route>
        <Route path="">404</Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
