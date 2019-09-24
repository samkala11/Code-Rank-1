import React from 'react';
import SignupContainer from '../session/signup_form_container'
import './splash.css'

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div className="splash-hero-message">  
          <h1 className="splash-hero-h1">// Welcome to CodeRank. <br/> Join over 4 developers. <br/>
           Practice coding, prepare for interviews, and get hired.
          </h1>
        </div>
          <SignupContainer/>
      </div>
    );
  }
}

export default Splash;