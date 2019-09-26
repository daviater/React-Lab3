import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar bg="primary" varient="dark">
        <NavBar.Brand href="#home">NavBars</NavBar.Brand>
        <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
      </NavBar>

      <Switch>
        <Route exactPath = '/' component={Content} />
        <Route exactPath = '/read' component={Header} />
        <Route exactPath = '/create' component={Footer} />
      </Switch>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
