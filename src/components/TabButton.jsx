import React from 'react'

export default function TabButton({ children, onSelect }) {
   
  return (
      <li>
          <button className='active' onClick={onSelect}>{children}</button>
      </li>
  )
}
