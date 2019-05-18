import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Search } from './pages/search';
import './styles/foundation/foundation.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
