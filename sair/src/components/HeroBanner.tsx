import React from "react";

function HeroBanner() {
  return (
    <div className="hero p-5 stick ">
      <div className="row">
        <div className="col-4">
          <h1>good morning vishnu</h1>
        </div>
        <div className="col-4">map</div>
        <div className="col-4">
          {" "}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-info">
            filter
          </button>
        </div>
      </div>
      home content here..
    </div>
  );
}

export default HeroBanner;
