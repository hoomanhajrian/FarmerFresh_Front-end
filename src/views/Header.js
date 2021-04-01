import React from 'react'

function Header() {
  return (
    <div className="Header" style={{ backgroundImage: "url(/img/bg_apple.png)" }}>
      <div className="site-header-text"><h1>A Fresh produce to your doorstep.</h1>
        <p>Browse what you are looking and feel satisfied. Download the app by clicking bellow:</p>
        <a href="files/FarmerFreshV2.6.apk" download="Farmerfresh_App"><img src="./img/google-play-badge.png" alt="google play button" /></a>
      </div>


      <div className="header_social_media ClearClass"> <a href="#"><i className="fab fa-pinterest-p"></i></a>
        <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  );
}

export default Header