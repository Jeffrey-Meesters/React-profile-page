import React, { Component } from 'react';

class Container3 extends Component{
  render() {
    return (
    <div>
      <div id="container2" className="container">
        <div>
          <a href={'https://nl.linkedin.com/in/jmeesters'} target="_blank"><img src={require('../assets/images/Ikke.jpg')} className={'img-off-ikke'} role={"presentation"} /></a>
        </div>

        <div className="container-middle">
          <h2>Ben jij mijn volgende werkgever?</h2>
          <br/><br/>
          Is je interesse gewekt?
          Neem dan gerust contact op.
          Mijn e-mail adres kan je <a className="contact-button" onClick={() => "contact()"} >hier</a> vinden.
        </div>
        {/* <!-- LinkedIn badge doesn't work when indented propperly--> */}
         <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="jmeesters"><a className="LI-simple-link" href='https://nl.linkedin.com/in/jmeesters?trk=profile-badge'>Jeffrey Meesters</a></div>
      </div>


     <footer>
       <span>© My Website 2017. All Rights Reserved! Made by <span className="logo">JM</span></span>
     </footer>
  </div>
  )};

}

export default Container3;
