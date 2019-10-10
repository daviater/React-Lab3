import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
import Content from './components/Content';
//import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar bg="primary" varient="dark">
        <Nav className="mr-auto">
         <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
        </Nav>
      </NavBar>

      <Switch>
        <Route exact path = "/" component={Content} />
        <Route path = "/read" component={Read} />
        <Route path = "/create" component={Create} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
