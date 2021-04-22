import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import LogIn from './components/Login';
import {Switch ,Route, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userdata :[]
    }
  }
  render() {
      return (
        <div className="App">
          <BrowserRouter >
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </div>
      );
  } 
}

export default App;
