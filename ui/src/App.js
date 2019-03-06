import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            {/* <Route exact path='/location/:woeid' component={LocationDetails} /> */}
            {/* <Route path='/search' component={SearchResults} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </Router>
    );
  }
}

export default App;
