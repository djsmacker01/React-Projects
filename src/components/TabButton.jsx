import React from 'react'

export default function TabButton({ children }) {
    function handleClick() { 
    alert('Button clicked')
    }
  return (
      <li>
          <button onClick={handleClick}>{children}</button>
      </li>
  )
}
