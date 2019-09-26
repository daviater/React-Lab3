import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Content extends Component {
  render(){
  return (
    <div className="Content">
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  }
}

export default Content;
