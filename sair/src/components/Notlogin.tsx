import React, { useState } from 'react'
import Signup from '../pages/Signup';

function Notlogin() {
  const [isActive, setIsActive] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  const [isSix, setIsSix] = useState(false);
  const [isEight, setIsEight] = useState(false);
  const handleClick7 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(true);
  };
  return (
   <> {isEight ? (<Signup />) : 
  <div className='myco'> 
     <div className="row hfr text-center">
      <img src='https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif' className="gif" alt="truch" />
   
     <button type="button" className="btn btn-primary mart text-center " onClick={handleClick7}>Login / Signup</button>
     <p className="p-1">You have not Logged in please login</p>

    </div> 

    </div>}
  
</>)}
export default Notlogin