import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/our_works" />
      <Route path="/advisor" />
      <Route path="/members" />
      <Route path="/contact_us" />
    </Switch>
  );
}

export default App;
