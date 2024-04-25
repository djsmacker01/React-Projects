import React from 'react'

export default function TabButton({ children, isSelected, ...props}) {
  
   
  return (
      <li>
          <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
      </li>
  )
}
