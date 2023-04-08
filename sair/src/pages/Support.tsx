import React from "react";
function Support() {
  return (
    <div className="  stick support3 ">
      <h3 className="text-center su">
        <br />
        Hi, how can we help you?
      </h3>
      <div className="row myd">
        <div className="col-3 m-4 card">
          <a href="">
            <div className="shadow-lg pl-4 pt-4 pb-4 rounded">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./orders.png"
                    loading="lazy"
                    className="simg"
                    alt="orders"
                  />
                </div>
                <div className="col-8 sutxt">
                  Your Orders
                  <p className="form-text sec">track packages</p>
                  <p className="form-text sec"> edit or cancel orders</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-3 m-4 card">
          {" "}
          <a href="">
            <div className="shadow-lg pl-4 pt-4 rounded">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./return.png"
                    loading="lazy"
                    className="rimg"
                    alt="return"
                  />
                </div>
                <div className="col-8 sutxt">
                  Returns and Refunds
                  <p className="form-text sec">
                    return or exchange
                    <br /> ordered items
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-3 m-4 card">
          {" "}
          <a href="">
            <div className="shadow-lg pl-4 pt-4 pb-4 rounded">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./map.png"
                    loading="lazy"
                    className="imgmap"
                    alt="map"
                  />
                </div>
                <div className="col-8 sutxt">
                  Manage Addresses
                  <p className="form-text sec">
                    update or add address, landmark details
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row myd1">
        <div className="col-3 m-4 card">
          {" "}
          <a href="">
            <div className="shadow-lg pl-4 pt-4 pb-4 trys rounded">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./profile.png"
                    loading="lazy"
                    className="mlp"
                    alt="profile"
                  />
                </div>
                <div className="col-8 sutxt">
                  Account Settings
                  <p className="form-text sec">change your email</p>
                  <p className="form-text sec">update login information</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-3 m-4 card">
          <div className="shadow-lg pl-4 pt-4 pb-4 rounded">
            {" "}
            <a href="">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./chat.png"
                    loading="lazy"
                    className="simg4"
                    alt="chat"
                  />
                </div>
                <div className="col-8 sutxt">
                  Chat with us
                  <p className="form-text sec">
                    got question? we've got the solution
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-3 m-4 card">
          <div className="shadow-lg pl-4 pt-4 pb-4 rounded">
            <a href="">
              <div className="row p-2">
                <div className="col-4">
                  <img
                    src="./call.png"
                    loading="lazy"
                    className="simg"
                    alt="orders"
                  />
                </div>
                <div className="col-8 sutxt">
                  Call us directly
                  <p className="form-text sec">
                    our friendly team is here to help
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
