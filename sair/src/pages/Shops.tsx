import React from "react";

function Shops() {
  return (
    <div className="p-5 mt-5">
      <div className="row">
        <div className="top-container shadow d-flex flex-row justify-content-end">
          <h1 className="top-heading">Stores</h1>
          <img src="https://freshcart.codescandy.com/assets/images/svg-graphics/store-graphics.svg" alt="cart image" />
        </div>
      </div>



      <div className="col d-flex flex-row">
        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="salad.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>E-Grocery Super Market</h4>
              <p>GT road Jalandhar</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 49 min</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="online-payment.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Life Style</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 25 min</span></div>
              </div>
            </div>
          </div>
        </div>


        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="grocery-store.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>DMart</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 45 min</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col d-flex flex-row">
        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="grocery-store.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Spencers</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 30 min</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="boutique.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Reliance</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 55 min</span></div>
              </div>
            </div>
          </div>
        </div>


        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="online-payment.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Trends</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 31 min</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="recent-viewed-card">
        <h3>Recently Viewed</h3>
      </div>

      <div className="col d-flex flex-row">
        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="boutique.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>H&M</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 50 min</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="fashion.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Zudio</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 50 min</span></div>
              </div>
            </div>
          </div>
        </div>


        <div className=" shops-section shadow">
          <div className="d-flex flex-row">
            <div>
              <img src="grocery-store.png"  alt="" className="rounded-circle icon-shape icon-x1" />
            </div>
            <div className="shops-text-card">
              <h4>Big Basket</h4>
              <p>Trunk road phagwara</p>
              <div>
                <div className="badge text-bg-light border"><span className="text-primary">Delivery in 23 min</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default Shops;
