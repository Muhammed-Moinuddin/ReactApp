import React from 'react';
import logo from './logo.svg';
import './App.css';
import './aligning.css';


function App(props) {
  return <div>
   Hello From <strong className="text">{props.name} </strong>
   <hr />
   <div>My age is {props.age - 15}</div>
   <div></div>
   </div>
} 

export default App;
