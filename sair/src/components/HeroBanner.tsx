import React from "react";
import { FcShipped,FcSalesPerformance ,FcShop} from "react-icons/fc";
import { useState } from "react";

function HeroBanner() {
  var isMorning;
  var isAfternoon;
  var isEvening;
  const today = new Date()
  const curHr = today.getHours()
    if (curHr < 12) {
     isMorning=(true);
    }else if (curHr < 18) {
     isAfternoon=(true);
    } else {
     isEvening=(true);
    }
   
  return (
    <div className="new-bg-color">
    <div className="mt-5 p-5 ">
      <div className="row ">
        {/* name section here...*/}
      <div className="top-name-section">
        <h3><span className="text-secondary">
        {isMorning ?( 'Good Morning') : isAfternoon ? 'Good Afternoon' : isEvening ? 'Good Evening':'Good Night'}
          
          </span> Nick</h3>
      </div>
      {/* main banner here... */}
      <div className="column">
        <div className="row">
          <div className="carousel-slider-section col-12 ">
          <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://th.bing.com/th/id/OIP.gIx5TjS4w24RDH3szZ7i9QHaDR?w=349&h=154&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.gIx5TjS4w24RDH3szZ7i9QHaDR?w=349&h=154&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.gIx5TjS4w24RDH3szZ7i9QHaDR?w=349&h=154&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
          </div>

        </div>
      </div>




      <div>
      <div className="today-deals-card shadow">
        <h3>Today deals</h3>
        <div className="row">
          <div className="d-flex flex-row">
           
           <div className="deals-section ">
           <div className="deals-image-sec">
              <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
               alt="" className="deals-img-card"/>
            </div>
            <h5>Samsung galaxy</h5>
           </div>

           <div className="deals-section ">
           <div className="deals-image-sec">
              <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
               alt="" className="deals-img-card"/>
            </div>
            <h5>Samsung galaxy</h5>
           </div>

           <div className="deals-section">
           <div className="deals-image-sec">
              <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
               alt="" className="deals-img-card"/>
            </div>
            <h5>Samsung galaxy</h5>
           </div>

           <div className="deals-section">
           <div className="deals-image-sec">
              <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
               alt="" className="deals-img-card"/>
            </div>
            <h5>Samsung galaxy</h5>
           </div>

           <div className="deals-section">
           <div className="deals-image-sec">
              <img src="https://rukminim1.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70"
               alt="" className="deals-img-card"/>
            </div>
            <h5>Samsung galaxy</h5>
           </div>



          </div>
        </div>
        <button className="btn">See more</button>
      </div>
      </div>




      <div className="row">
        <div className="d-flex flex-row ">
          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Mobiles</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Appliances</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Mobiles</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Mobiles</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Mobiles</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Electronics</h5>
          </div>

          <div className="categories-space">
            <div className="">
              <div className="categories-naming-section shadow">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              
              </div>
            </div>
            <h5 className="categories-name-card">Mobiles</h5>
          </div>
          
          
        </div>
      </div>

      <div className="row">
        <div className="d-flex flex-row">
          <div className="new-arrivals">
            <img src="new arrivals.jpg" alt="" className="new-arrivals-img"/>
           </div>

           
           
        </div>
      </div>

      </div>
    </div>

    </div>
  );
}

export default HeroBanner;
