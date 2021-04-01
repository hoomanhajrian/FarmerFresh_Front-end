import React from 'react'

function Footer() {
    return (
    <div className="Footer">
        <div class="Footer_wrapper">
          <div className="Footer_logo"><a href="#menu"><img src="img/logo_white.png" alt="Farmerfresh Logo White" /></a></div>
          <div className="Footer_menu">
            <div className="Footer_menu_menu">
              <div className="Menu_about">
              <a href="#about">
              About
              </a></div>
              <div>|</div>
            <div className="Menu_features"><a href="#features">
              Features
              </a></div>
              <div>|</div>
            <div className="Menu_team"><a href="#team">
              Team
              </a></div>
              <div>|</div>
            <div className="Menu_contact"><a href="#contactus">
              Contact
              </a></div>
          
            </div>
            <div className="Footer_description"><p>@ 2021 Farmerfresh by team Super7. All rights</p></div>
          </div>
          <div className="Footer_social"><p>Follow us on:</p>
            <div className="Footer_social_menu">
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-snapchat-ghost"></i>
              <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
            </div></div>
        </div>
    </div>
  );
}

export default Footer