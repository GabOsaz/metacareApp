import React from 'react'

function DividerSvg({ h='24', theme }) {
  const themeColor = theme === 'dark' ? '#394657' : "#ECEBF5"

  return (
    <svg width="1" height={h} viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height={h} fill={themeColor}/>
    </svg>    
  )
}

export default DividerSvg