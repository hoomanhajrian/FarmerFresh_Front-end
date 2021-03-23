import React from 'react'
import SlideshowTestimonials from './SlideshowTestimonials'

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
          <SlideshowTestimonials />
        </div>
      </div>
  );
}

export default Stories