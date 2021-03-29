import React from 'react'
import SlideshowTeam from './SlideshowTeam'

function Team() {
    return (
      <div id="team">
        <div className="Team_Title">
          <div><h2>Our Team</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>
        <div className="Team">
        
          <SlideshowTeam />
          <div className="upperTeam ClearClass">
        {/* Member 1 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/hooman.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Hooman Hajarian</h2></div>
          <div className="Team_Position"><h3>Project Manager</h3></div>
              <div className="Team_Social_Media">
                <a href="https://www.linkedin.com/in/hooman-hajarian"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/hoomanhajrian"><i class="fab fa-github-square"></i></a>
              </div>
        </div>
        {/* Member 2 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/harmeet.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Harmeet Kaur</h2></div>
          <div className="Team_Position"><h3>Lead Designer</h3></div>
<div className="Team_Social_Media">
                <a href=""><i class="fab fa-linkedin"></i></a>
                <a href=""><i class="fab fa-github-square"></i></a>
              </div>        </div>
        {/* Member 3 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/navneet.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Navneet Kaur</h2></div>
          <div className="Team_Position"><h3>Full Stack Developer</h3></div>
<div className="Team_Social_Media">
                <a href="http://www.linkedin.com/in/navneetdev"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/navneet1328"><i class="fab fa-github-square"></i></a>
              </div>        </div>
        {/* Member 4 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/kulbir.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Kulbir Singh</h2></div>
          <div className="Team_Position"><h3>UI/UX Designer</h3></div>
<div className="Team_Social_Media">
                <a href="http://www.linkedin.com/in/kulbirsp"><i class="fab fa-linkedin"></i></a>
                <a href=""><i class="fab fa-github-square"></i></a>
              </div>          </div>
        </div>
        <div className="bottomTeam ClearClass">
        {/* Member 5 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/gurvinder.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Gurvinder Singh</h2></div>
          <div className="Team_Position"><h3>UI/UX Designer</h3></div>
<div className="Team_Social_Media">
                <a href=""><i class="fab fa-linkedin"></i></a>
                <a href=""><i class="fab fa-github-square"></i></a>
              </div>        </div>
        {/* Member 6 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/juan.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Juan Santos</h2></div>
          <div className="Team_Position"><h3>Full Stack Developer</h3></div>
<div className="Team_Social_Media">
                <a href="https://www.linkedin.com/in/juancfsantos/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/juancfsantos"><i class="fab fa-github-square"></i></a>
              </div>        </div>
        {/* Member 7 */}
        <div className="Team_Member_Container">
          <div className="Team_Profile_Pic"><img src="img/members/Arshdeep.png" alt="Team Member Profile Image" /></div>
          <div className="lineDiv_vertical"><div className="verticalLine"></div></div>
          <div className="Team_Name"><h2>Arshdeep Kaur</h2></div>
          <div className="Team_Position"><h3>UI/UX Designer</h3></div>
<div className="Team_Social_Media">
                <a href="https://www.linkedin.com/in/arshdeep-kaur-designer/"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.behance.net/arshdeepkaur5"><i class="fab fa-github-square"></i></a>
              </div>          </div>
          </div>
          </div>
    </div>
  );
}

export default Team