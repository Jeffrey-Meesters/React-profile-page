import React, { Component } from 'react';

class Container1 extends Component {
  render() {
    return(

    <div id="header" className="container">
      <div className="title">
        <h1><a href='https://nl.linkedin.com/in/jmeesters' target="_blank">Jeffrey Meesters</a></h1>
      </div>

      <div className="info">
        <span className="intro"> Web-developer en motorrijder! </span>
        <span id="skills"> Enkele skills: </span>
        <ul className="skills-list">
          <li className="list-item"> Ruby / Ruby on Rails </li>
          <li className="list-item"> JavaScript </li>
          <li className="list-item"> HTML </li>
          <li className="list-item"> CSS </li>
          <li className="list-item"> Rechtop door de bocht </li>
          <li className="list-item"> ... </li>
        </ul>
      </div>
    </div>
  )};
}

export default Container1;
