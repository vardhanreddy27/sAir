import React from 'react'
import { Link } from 'react-router-dom'

function Notlogin() {
  return (
    <div className='myco'>
     <div className="row hfr text-center">
      <img src='https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif' className="gif" alt="truch" />
   
    <Link to="Login"> <button type="button" className="btn btn-primary mart text-center ">Login / Signup</button></Link>
     <p className="p-1">You have not Logged in please login</p>

    </div> 
 
    </div>
  )
}

export default Notlogin