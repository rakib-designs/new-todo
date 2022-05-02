import React from 'react'

export default function Input({type, placeholder, value, handleChange}) {
  return (
       <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
       />
  )
}
