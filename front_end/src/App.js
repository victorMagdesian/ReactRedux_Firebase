import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/Layout/NavBar';
import CreateProject from './components/Projects/CreateProject';
import ProjectDetails from './components/Projects/ProjectDetails';


const App = () => {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/'component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  
}

export default App;
