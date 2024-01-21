import React from 'react'
import Cursor from './cursor'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Cursor />
      <div className='h-screen w-screen flex justify-center items-center bg-[#EBD9B4]'>
        <div className='text-[#3E3232] text-9xl font-LORA font-bold'>
          Custom Cursor
        </div>
      </div>
    </div>
  )
}

export default App