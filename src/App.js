import React, { useContext, createContext, useState } from 'react'
import './App.css';
import Button from 'react-bootstrap/button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

var auth = false;


function toggleAuth(){
  auth = !auth;
  console.log(auth)  
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      <Button variant="dark" onClick={toggleAuth}>Toggle Authentication</Button><br></br>
      <h1><strong>Auth Router React App</strong></h1>

      
      <Router>
        <div className="row-flex">
          <Link to="/">
            <Button 
              variant="primary" 
              className="navB" 
              style={{ fontSize: 22, fontWeight: 500 }}>
                Login
            </Button>
          </Link>  
            
          <Link to="/signup">
            <Button 
              variant="primary" 
              className="navB" 
              style={{ fontSize: 22, fontWeight: 500 }}>
                Sign Up
            </Button>
          </Link>  

          <Link to="/home">
            <Button 
              variant="primary" 
              className="navB" 
              style={{ fontSize: 22, fontWeight: 500 }}>
                Home
            </Button>
          </Link>  

          <Link to="/about">
            <Button 
              variant="primary" 
              className="navB" 
              style={{ fontSize: 22, fontWeight: 500 }}>
                About
            </Button>
          </Link>  
        </div> <br></br>

          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      
      </header>
    </div>
  );
}

const authContext = createContext();

function useAuth() {
  return useContext(authContext);
}

function PrivateRoute({ children }) {
  return (
    <Route
      render={() =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

export default App;
