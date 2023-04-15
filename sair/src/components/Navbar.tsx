import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

function Navbar() {
  // const [cityarray, setCityarray] = React.useState(null);

  // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  // useGeolocated({
  //     positionOptions: {
  //         enableHighAccuracy: true,
  //     },
  //     userDecisionTimeout: 5000,
  // });
  // const x = coords?.latitude??10;

  // const y =coords?.longitude??10;
  // const baseURL = "https://api-bdc.net/data/reverse-geocode?latitude=x&longitude=y&localityLanguage=en&key=bdc_165299c2848643df95175c11e686f7ad";
  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setCityarray(response.data);
  //   });
  // }, [console.log(cityarray,x,y)]);
   
  return <div className=" row navbar">
<div className="col-1"><img src="./delivery.png" className="logoimage d-inline"/> <h2 className="logo  d-inline">sAir</h2></div>
<div className="col-9">
<div className="input-group input-groups mb-3">
  <input type="text" className="removep form-control " placeholder="Search for products, shops and more" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append lo">
    <button className="input-group-text test"id="basic-addon2"><BsSearch  /></button>
  </div>
  <button type="button" className=" btn-light loc text-secondary brs">City</button>

</div>
</div>
<div className="col-1"><AiOutlineShoppingCart className="cart" size={30}/></div>

  </div>;
}

export default Navbar;
