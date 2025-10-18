import React from 'react'
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImage from '../../assets/playground.png'
function QZone() {
  return (
    <div className='bg-base-200 p-3'>
      <h2 className='font-bold mb-5'>Zone</h2>
      <div className='space-y-5'>
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  )
}

export default QZone
