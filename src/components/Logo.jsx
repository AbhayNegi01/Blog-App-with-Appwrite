import React from 'react'

function Logo(width = '100px') {
  return (
    <img 
    src="../../src/assets/logo/Logo.jpg" 
    alt="Logo" 
    className='w-12 border rounded-full transition-transform duration-300 ease-in-out hover:scale-110'
    />
  )
}

export default Logo