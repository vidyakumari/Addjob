import React from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import { Card } from './Components/Redux/Container/bodyContainer'
import { Router, Route } from "react-router-dom";
import { Signin, Register } from '../src/Components/Redux/Container/userContainer'
import { history } from './Components/Redux/history/history';
import { Addjob } from './Components/Redux/Container/AddjobContainer'
import {Updatejob} from './Components/Redux/Container/updateJobs'

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Router history={history}>
          <Header />
          <Route exact path="/" component={Card} />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Register} />
          <Route path="/addJobs" component={Addjob} />
          <Route path="/updatejobs" component={Updatejob} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;