import React from 'react'

function Stories() {
    return (
      <div>
        <div className="Stories_Title">
          <div><h2>What our clients say</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>
        <div className="Stories">
          
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="quoteDiv"><p>"</p></div>
              <img src="img/testimonials/image1.png" />
              <div className="CaptionText"><p>Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers directly. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p></div>
              <div className="CaptionFarmer"><p>Kulbir Singh</p></div>
              <div className="quoteDiv"><p>"</p></div>
              </div>
          </div>
          
          <div className="textAlignCenter">
           <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
         <span className="dot" onclick="currentSlide(3)"></span>
        </div>
        </div>
      </div>
  );
}

export default Stories