import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './pages/home';
import WorkPage from './pages/work';
import AdvisorPage from './pages/advisor';
import MemberPage from './pages/member';
import ContactPage from './pages/contact';

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      duration: 500,
      offset: 200,
      once: true,
    });
  }, []);

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
