import React from 'react'

function Header() {
    return (
    <div className="Header" style={{ backgroundImage: "url(/img/bg_apple.png)" }}>
        <div className="site-header-text"><h1>A Fresh produce to your doorstep.</h1>
          <p>Browse what you are looking and feel satisfied. Download the app by clicking bellow:</p>
        <img src="img/google-play-badge.png" alt="google play button"/></div>
        
        <div className="header_social_media ClearClass"><i className="fab fa-pinterest-p"></i>
          <i class="fab fa-snapchat-ghost"></i>
          <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i></div>
    </div>
  );
}

export default Header