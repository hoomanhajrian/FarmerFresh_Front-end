import React from 'react'

function About() {
    return (
      <div className="About" id="about">
        <div className="About_Title">
          <div><h2>About Farmerfresh</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>

        <div className="About_features">
          <div className="About_features_block">
            <div class="img_feature"><img src="img/feature_1.png" alt /></div>
            <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
            <div className="content_feature"><h2>Who We Are</h2>
            <p>A virtual marketplace for local organic farmers to sell their products directly to the consumers more profitably, efficiently and conveniently.</p></div>
          </div>
          <div className="About_features_block">
            <div class="img_feature"><img src="img/feature_2.png" alt /></div>
            <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
            <div className="content_feature"><h2>Mission</h2>
            <p>To estabilish a direct connection among local organic farmers and consumers to sell and buy the fresh produce respectively</p></div>
          </div>
          <div className="About_features_block">
            <div class="img_feature"><img src="img/feature_3.png" alt /></div>
            <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
            <div className="content_feature">
              <h2>Vision</h2>
              <p>To give an exposure of a large costumer base to the certified organic farmers by estabilishing a direct relationship between them.</p>
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default About