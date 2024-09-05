import React, { useState } from 'react'
import '../style/toggle.css'

export const Toggle = () => {
const [isOn,setIsOn]=useState(false);
const checkCondition=isOn? "on":"off";
const bgColor={backgroundColor:isOn? "lightgreen":" rgb(147, 36, 36)"};
const handlefunc=()=>
{
  setIsOn(!isOn);

}   
 return (
   <>
 <div className='box'
 style={bgColor}
  onClick={handlefunc}>
    <div className={`button ${checkCondition}`}>
        <span className='switch'>{checkCondition}</span>
    </div>
 </div>
   </>
  )
}

