import React from 'react'

function Video() {
  return (
      
    <div className="videoContainer">
      <div className="Video_Title">
          <div><h2>Our Work</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>
      <div className="Video">
        <div className="Video_Content">
          <h2>Explore more about the Farmerfresh project</h2>
          <p>Below you can find the proposal document of the Farmerfresh Project</p>
          <a href="files/proposal.pdf" download="Farmerfresh_Proposal"><button>Download Proposal</button></a>
        </div>
        <div className="Video_Video">
          <iframe src="https://www.youtube.com/embed/C6kipht-wNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video