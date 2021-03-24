import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'img/members/Arshdeep.png',
  'img/members/gurvinder.png',
  'img/members/harmeet.png',
  'img/members/hooman.png',
  'img/members/juan.png',
  'img/members/kulbir.png',
  'img/members/navneet.png',
  ];

const SlideshowTeam = () => {
    return (
      <div id="SlideshowTeam">
        <Slide easing="ease">
          <div className="each-slide">
            <img src={slideImages[0]} />

                    <div className="Team_Name"><h2>Arshdeep Kaur</h2></div>
                    <div className="Team_Position"><h3>UI/UX Designer</h3></div>
                     <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-behance-square"></i></div>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[1]} />
            <div className="Team_Name"><h2>Gurvinder Singh</h2></div>
                    <div className="Team_Position"><h3>UI/UX Designer</h3></div>
                     <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-behance-square"></i></div>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[2]} />
              <div className="Team_Name"><h2>Harmeet Kaur</h2></div>
          <div className="Team_Position"><h3>Lead Designer</h3></div>
          <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-behance-square"></i></div>
          </div>

          
          <div className="each-slide">
             <img src={slideImages[3]} />
               <div className="Team_Name"><h2>Hooman Harijan</h2></div>
          <div className="Team_Position"><h3>Project Manager</h3></div>
          <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-github-square"></i></div>
                </div>
                
                <div className="each-slide">
             <img src={slideImages[4]} />
           <div className="Team_Name"><h2>Juan Santos</h2></div>
          <div className="Team_Position"><h3>Full Stack Developer</h3></div>
          <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-github-square"></i></div>
                </div>
                
                <div className="each-slide">
             <img src={slideImages[5]} />
                <div className="Team_Name"><h2>Kulbir Singh</h2></div>
          <div className="Team_Position"><h3>UI/UX Designer</h3></div>
          <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-behance-square"></i></div>
                </div>
                
                <div className="each-slide">
             <img src={slideImages[6]} />
               <div className="Team_Name"><h2>Navneet Kaur</h2></div>
          <div className="Team_Position"><h3>Full Stack Developer</h3></div>
          <div className="Team_Social_Media"><i class="fab fa-linkedin"></i><i class="fab fa-github-square"></i></div>
          </div>
          
          
        
        </Slide>
      </div>
    )
};

export default SlideshowTeam;