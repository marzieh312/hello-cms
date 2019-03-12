import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import FaqPage from './pages/FaqPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route path='/faqs' component={FaqPage} />
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </Router>
    );
  }
}

export default App;
