import React from 'react'
import { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const [value,setvalue]=useState('')
    const navigate=useNavigate()

   console.log(value)
    const handleJoin=useCallback(()=>{

      if (value.trim() === "") {
        alert("Please enter a room number");
        return;
      }
       navigate(`/room/${value}`)
    },[navigate,value])
  return (
    <div className='flex justify-center content-center mt-60'>
     
     <div>
      <div className='border-gray-95'>
        <p>enter a room number to create meeting </p>
        <input 
          type='text'
          className='border-gray-95'
          placeholder='enter your room code'
          value={value}
          onChange={(e)=>{setvalue(e.target.value)}}
        />
        <button onClick={handleJoin} className='text-2xl ml-5 text-blue-700'>create</button>
      </div>
    </div>
  </div>
  )
}

export default HomePage
