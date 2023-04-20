import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

function Navbar() {
  const [cityarray, setCityarray] = React.useState("Location");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
  });
  const x = coords?.latitude;

  const y =coords?.longitude;
  const k=x+"%2C"+y;
  const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=aU0aC4MHNzBiEU0Ta5umqz9xeOTJOJju&q="+k+"&language=en-us&details=false&toplevel=true";
 function tCity() {
    axios.get(baseURL).then(async (response) => {
      setCityarray(await response.data.SupplementalAdminAreas[1].EnglishName);
    });
  }
  tCity();

  return( 
  <div className=" row navbar">
<div className="col-1"><img src="./delivery.png" className="logoimage d-inline"/> <h2 className="logo  d-inline">sAir</h2></div>
<div className="col-9">
<div className="input-group input-groups mb-3">
  <input type="text" className="removep form-control " placeholder="Search for products, shops and more" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append lo">
    <button className="input-group-text test"id="basic-addon2"><BsSearch  /></button>
  </div>
  <button type="button" className=" btn-light loc text-secondary brs">{cityarray}</button>

</div>
</div>
<div className="col-1"><AiOutlineShoppingCart className="cart" size={30}/></div>

  </div>);
}
export default Navbar;
