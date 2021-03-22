import React from 'react'

function Features() {
    return (
    <div className="Features" id="features">
        <div className="Features_Title">
          <div><h2>Our Features</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>

      <div className="Features_features">
          <div className="Features_features_block">
            <div className="numberFeature">01</div>
            <div className="img_feature"><img src="img/img1.png" alt /></div>
            <div className="lineDiv_vertical positionLine"><div className="verticalLine"></div></div>
            <div className="content_feature"><h2>Farm profile management</h2>
            <p>You can create and customize the profile of your farm to set a unique identity to serve your customers.</p></div>
          </div>
          <div className="Features_features_block">
            <div className="numberFeature">02</div>
            <div class="img_feature"><img src="img/img2.png" alt /></div>
            <div className="lineDiv_vertical positionLine"><div className="verticalLine"></div></div>
            <div className="content_feature"><h2>Post listings</h2>
            <p>You can create a post of your product and view your post listings. You can easily customize your posts through various options.</p></div>
          </div>
          <div className="Features_features_block">
            <div className="numberFeature">03</div>
            <div class="img_feature"><img src="img/img3.png" alt /></div>
            <div className="lineDiv_vertical positionLine"><div className="verticalLine"></div></div>
            <div className="content_feature">
              <h2>Inventory management</h2>
              <p>You can keep track of your iventory and manage the stock to give your customers the most updated information about your products.</p>
            </div>
          </div>
        </div>

      </div>
  );
}

export default Features