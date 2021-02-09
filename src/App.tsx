import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import WorkPage from './pages/work';
import AdvisorPage from './pages/advisor';
import MemberPage from './pages/member';
import ContactPage from './pages/contact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/advisor" component={AdvisorPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  );
}

export default App;
