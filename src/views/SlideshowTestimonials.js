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

            <p className="testimonialText">Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers direclty. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p>
            <p className="testimonialName">Farmer's Name 1</p>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[1]} />
              <p className="testimonialText">Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers direclty. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p>
            <p className="testimonialName">Farmer's Name 2</p>
            </div>
          
          <div className="each-slide">
             <img src={slideImages[2]} />
              <p className="testimonialText">Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers direclty. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p>
            <p className="testimonialName">Farmer's Name 3</p>
          </div>

          
          <div className="each-slide">
             <img src={slideImages[3]} />
              <p className="testimonialText">Farmerfresh helped us with a virtual spot to sell my locally grown organic produce to consumers direclty. Before that, I grow produce but the market has no place for local farmers. Farmerfresh give us an opportunity to survive.</p>
            <p className="testimonialName">Farmer's Name 4</p>
          </div>
          
          
        
        </Slide>
      </div>
    )
};

export default SlideshowTestimonials;