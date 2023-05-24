import React from "react";
import { BsSearch } from "react-icons/bs";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Notlogin from "../components/Notlogin";
function TrackOrders(props) {
  const isLoggedIn = props.isLoggedIn;
  return <>{
isLoggedIn ? <div className="row">
<div className="col-6 p-5 mt-5 bg-light">
<h4 className="mb-4">Tracking Delivery</h4>
<div className="input-group mb-3">
<input type="text" className="form-control sf " placeholder="Search Order's" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
<div className="input-group-append">
<button className="btn btn-outline-secondary tracksearchs" type="button"><BsSearch className="searchs" /></button>
</div>
</div>
<div className="row">
<a type="button" ><div className="card cardm ">
<div className="card-body">
<div className="row">
<div className="col-6"><p>Order ID: <span className="bold">#AD345JK75</span></p></div>
<div className="col-6 myend"><button type="button"  className="cbutton" ><p className="">In-Transit</p></button></div>
</div>
<div className="row">
<div className="col-4"><p>Picked up</p></div>
<div className="col-4"><p className="text-center">In-Transit</p></div>
<div className="col-4"><p className="myend">Delivered</p></div></div>
<div className="row"><ProgressBar className="progress mb-2" animated now={60} />
</div>
<table className="table table-hover text-center">
<thead>
<tr>
  <th scope="col">Item</th>
  <th scope="col">Status</th>
  <th scope="col">Time</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row"></th>
  <td>Picked up</td>
  <td>10:43 AM</td>
</tr>
<tr>
  <td scope="row">sony tv</td>
  <td>In-Transit</td>
  <td>11:23 AM</td>
</tr> <tr>
  <th scope="row"></th>
  <td>Delivered</td>
  <td>--:-- </td>
</tr>
</tbody>
</table>
 </div>
</div></a>
</div>
<div className="row mt-3">
<a type="button" ><div className="card cardmm ">
<div className="card-body">
<div className="row">
<div className="col-6"><p>Order ID: <span className="bold">#AD345JK75</span></p></div>
<div className="col-6 myend"><button type="button"  className="cbutton" ><p className="">In-Transit</p></button></div>
</div>
<div className="row">
<div className="col-4"><p>Picked up</p></div>
<div className="col-4"><p className="text-center">In-Transit</p></div>
<div className="col-4"><p className="myend">Delivered</p></div></div>
<div className="row"><ProgressBar className="progress mb-2" animated now={15} />
</div>
<table className="table table-hover text-center">
<thead>
<tr>
  <th scope="col">Item</th>
  <th scope="col">Status</th>
  <th scope="col">Time</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row"></th>
  <td>Picked up</td>
  <td>10:43 AM</td>
</tr>
<tr>
  <td scope="row">sony tv</td>
  <td>In-Transit</td>
  <td>--:--</td>
</tr><tr>
  <th scope="row"></th>
  <td>Delivered</td>
  <td>--:-- </td>
</tr>
</tbody>
</table>
 </div>
</div></a></div><div className="row mt-3">
<div className="card cardmm ">
<a type="button" ><div className="card-body">
<div className="row">
<div className="col-6"><p>Order ID: <span className="bold">#AD345JK75</span></p></div>
<div className="col-6 myend"><button type="button"  className="cbutton" ><p className="">In-Transit</p></button></div>
</div>
<div className="row">
<div className="col-4"><p>Picked up</p></div>
<div className="col-4"><p className="text-center">In-Transit</p></div>
<div className="col-4"><p className="myend">Delivered</p></div></div>
<div className="row"><ProgressBar className="progress mb-2" animated now={30} />
</div>
<table className="table table-hover text-center">
<thead>
<tr>
  <th scope="col">Item</th>
  <th scope="col">Status</th>
  <th scope="col">Time</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row"></th>
  <td>Picked up</td>
  <td>10:43 AM</td>
</tr>
<tr>
  <td scope="row">sony tv</td>
  <td>In-Transit</td>
  <td>11:23 AM</td>
</tr> <tr>
  <th scope="row"></th>
  <td>Delivered</td>
  <td>--:-- </td>
</tr>
</tbody>
</table>
 </div></a>
</div></div><div className="row mt-3">
<a type="button" ><div className="card cardmm ">
<div className="card-body">
<div className="row">
<div className="col-6"><p>Order ID: <span className="bold">#AD345JK75</span></p></div>
<div className="col-6 myend"><button type="button"  className="cbutton" ><p className="">In-Transit</p></button></div>
</div>
<div className="row">
<div className="col-4"><p>Picked up</p></div>
<div className="col-4"><p className="text-center">In-Transit</p></div>
<div className="col-4"><p className="myend">Delivered</p></div></div>
<div className="row"><ProgressBar className="progress mb-2" animated now={40} />
</div>
<table className="table table-hover text-center">
<thead>
<tr>
  <th scope="col">Item</th>
  <th scope="col">Status</th>
  <th scope="col">Time</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row"></th>
  <td>Picked up</td>
  <td>10:43 AM</td>
</tr>
<tr>
  <td scope="row">sony tv</td>
  <td>In-Transit</td>
  <td>11:23 AM</td>
</tr> <tr>
  <th scope="row"></th>
  <td>Delivered</td>
  <td>--:-- </td>
</tr>
</tbody>
</table>
 </div>
</div></a></div>
</div>
<div className="col-6 p-5 stickto">
<p>Order ID: <span className="bold">#AD345JK75</span></p>
<div className="brs ">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61812.525976457706!2d78.78834335686905!3d14.46843952803116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37210d4f26f87%3A0xaf158859a18a02a0!2sKadapa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1681564351174!5m2!1sen!2sin" width="102%" height="30%"  loading="lazy"></iframe>
</div><p className="mt-3">Main Info</p>
<Tabs
  defaultActiveKey="#"
  id="justify-tab-example"
  className="mb-3"
  justify
>
  <Tab eventKey="#" title="Order Details">
  <Table bordered hover size="sm">
  <thead>
    <tr>
      <th>Order Items</th>
      <th>Quantity</th>
      <th><p className="tmy">Seller</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sony TV</td>
      <td><p className="tmy">2</p></td>
      <td><p className="tmy">sono vision</p></td>
    </tr>
    <tr>
      <td>Cooler</td>
      <td><p className="tmy">1</p></td>
      <td><p className="tmy">Bajaj</p></td>
    </tr>

  </tbody>
</Table>
  </Tab>
  <Tab eventKey="" title="Delivery Information">
  <div className="row">
<div className="col-5">Rider Name</div>
<div className="col-1"> - </div>
<div className="col-6">Suresh kumar</div>
</div>
<div className="row mt-2">
<div className="col-5">Your Location</div>
<div className="col-1"> - </div>
<div className="col-6">1/380-5-1,maruthi nagar,kadapa,516002</div>
</div>  <div className="row mt-2">
<div className="col-5">Rider Number</div>
<div className="col-1"> - </div>
<div className="col-6">986 6531 011</div>
</div>
  </Tab>
</Tabs>
</div>
  </div> : <Notlogin />}
    
  </>;
}

export default TrackOrders;
