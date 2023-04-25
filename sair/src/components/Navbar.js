import React, { useState } from 'react';
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import mydata from './cities';

function Navbar() {

  const [selectedOptions, setSelectedOptions] = useState();
  const options = mydata.map(d => ({
    "value" : d.city,
    "label" : d.city
  }))
  const [cityarray, setCityarray] = React.useState("Location");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { coords } =
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
  const [mylocvalue, setMylocvalue] = useState('test');
  function handleSelect(data) {
    setSelectedOptions(data);
    setMylocvalue(data.value);
    handleClose();
      }
  return( 
  <div className=" row navbar">
<div className="col-1"><img src="./delivery.png" className="logoimage d-inline"/> <h2 className="logo  d-inline">sAir</h2></div>
<div className="col-9">
<div className="input-group input-groups mb-3">
  <input type="text" className="removep form-control " placeholder="Search for products, shops and more" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append lo">
    <button className="input-group-text test"id="basic-addon2"><BsSearch  /></button>
  </div>
  <button type="button" onClick={handleShow} className="  mybt text-secondary brs">{mylocvalue=='test' ?  cityarray : mylocvalue   }<RiArrowDropDownFill /></button>
</div>
</div>
<div className="col-1"><AiOutlineShoppingCart className="cart" size={30}/></div>
<Modal show={show}  size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Select  
          options={options}
          placeholder="Select your city"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
            />
            <div  className='row text-center mt-5'>
            <div className='col-3'>Kadapa</div>
            <div className='col-3'>Guntur</div>
            <div className='col-3'>Nellore</div>
            <div className='col-3'>Kakinada</div>
            </div>
          </Form>
        </Modal.Body>
        
      </Modal>
  </div>
  
  );
}
export default Navbar;
