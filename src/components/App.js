import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../routes/About";
import ColorWithRedux from "../routes/ColorWithRedux";
import Home from "../routes/Home";
import Member from "../routes/Member";
import NotFound from "../routes/NotFound";
import Posts from "../routes/Posts";
import Search from "../routes/Search";

import Header from "./Header";

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/:username" component={About} />
              <Route path="/search" component={Search} />
              <Route path="/postsList" component={Posts} />
              <Route path="/memberList" component={Member} />
              <Route path="/colorWithRedux" component={ColorWithRedux} />
              <Route component={NotFound} />;
            </Switch>
          </div>
        </Router>
    );
  }
};

export default App;


import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;