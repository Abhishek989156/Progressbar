import React from 'react'
import './Progressbar.css'
const Progressbar = ({value=0}) => {
  return (
    <div className='bar'>
        <span style={{color: value<49?'black':'white' }}>{`${value}%`}</span>
        <div className='green' style={{width:`${value}%`}}></div>

      
    </div>
  )
}

export default Progressbar

