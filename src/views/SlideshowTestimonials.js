import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'img/testimonials/image1.png',
  'img/testimonials/image2.png',
  'img/testimonials/image3.png',
  'img/testimonials/image4.png',
];

const SlideshowTestimonials = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <img src={slideImages[0]} />

            <p className="testimonialText">Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers directly. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p>
            <p className="testimonialName">Yu Yan</p>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[1]} />
              <p className="testimonialText">I am a local farmer and grows seasonal vegetables. In-organic produce dominated the market with a rumour that there is no place for organic produce. Although everybody is aware what we are eating and how these in-organic produce impacts our health.</p>
            <p className="testimonialName">Sophie Jackson</p>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[2]} />
              <p className="testimonialText">As a farmer, I live in the countryside. I grow oranges but transportation cost to sell these oranges is high and whatever I earn is not enough for my all expenditures. With Farmerfresh I can showcase my products virtually and control my stock effortlessly.</p>
            <p className="testimonialName">Jacob Anderson</p>
          </div>

          
          <div className="each-slide">
             <img src={slideImages[3]} />
              <p className="testimonialText">A few consumers buy produce from my farms and it has been always hard to control stock operations manually. The Farmerfresh app gives us flexibility to control inventory operations and customize our own profile to look elegant.</p>
            <p className="testimonialName">Peter Smith</p>
          </div>
          
          
        
        </Slide>
      </div>
    )
};

export default SlideshowTestimonials;