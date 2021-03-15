import React from 'react'

function Menu() {
    return (
    <div className="Menu" id="menu">
        <div className="Menu_container">
          <a href="#about">
            <div className="Menu_about">About</div>
          </a>
          <a href="#features">
            <div className="Menu_features">Features</div>
          </a>
          <a href="#menu">
            <div className="Menu_logo"> <img src="img/logo.png" alt="FarmerFresh Logo" /></div>
          </a>
          <a href="#team">
            <div className="Menu_team">Team</div>
          </a>
          <a href="#contactus">
            <div className="Menu_contact">Contact Us</div>
          </a>
        </div> 
      </div>
  );
}

export default Menu