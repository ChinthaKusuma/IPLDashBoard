import {Route, Switch} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import './App.css'

import Home from './components/Home'
// import TeamCard from './components/TeamCard'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
