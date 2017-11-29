import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Report from './Report';
import ViewReport from './ViewReport';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Loading from '../components/Loading';

export default () => (
  <Router>
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/report/" exact component={Report} />
        <Route path="/report/:id" component={ViewReport} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/loading" exact component={Loading} />
      </Layout>
    </Switch>
  </Router>
);
