import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import {BrowserRouter as Router , Route} from 'react-router-dom' ;
import AddProject from './components/projects/AddProject';
import {Provider}  from  'react-redux' ;
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header />
      {/* <Dashboard /> */}
    </div>
    <Route path="/dashboard" exact component={Dashboard} /> 
    <Route path="/addProject" exact component={AddProject} />
    </Router>
    </Provider>
  );
}

export default App;
