import React from 'react'
import { Counter } from '../features/counter/Counter';

function Profile() {
  return (
    <div className='pt-4 mt-5'>
<div className='me-5 row pe-5 ps-5 ms-2'>
  <h3 className='text-center p-4'>profile</h3>
  <div className='row'>
    <div className='col-6 '>
<input className="form-control mbp ms-2" type="text" placeholder="Your full name" aria-label="default input example" /></div>
<div className='col-6'><input type="email" className="form-control mbp" id="exampleFormControlInput1" placeholder="Your email" />
</div></div>
<div className='row'><div className='col-6 '>
<input type="tel" id="typePhone" placeholder="Your mobile number" className="form-control mbp ms-2" />
</div><div className='col-6 '><input type="text" className="form-control mbp" id="inputAddress" placeholder="Your address" /></div>
</div>
<div className='row'><div className='col-6'>
<input type="text" className="form-control mbp ms-2" id="inputCity"  placeholder="Your State" />
</div><div className='col-6'>
<select id="inputState" className="form-control form-select mbp">
      <option selected>kadapa</option>
      <option>nellore</option>
    </select></div></div>
<div className='row'><div className='col-6 '> 
   <input type="text" className="form-control mbp ms-2" placeholder="Your pincode" id="inputZip" />
</div>
<div className='col-6 '> <input class="form-control readonlycolor" type="text" value="India"  readOnly></input></div>
</div>
<div className='row'>
<div className='col-12'><button type="button" className="mbp ms-2 text-center btn me btn-primary btn-lg btn-block">Update</button></div>

</div>
</div>
  </div>
  )
}

export default Profile