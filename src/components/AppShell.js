import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

function AppShell({ children }) {
  return (
    <div className='w-full'>
      <Nav />
      <Sidebar />
      <div className='absolute left-[16.5vw] top-[23%] w-[83vw]  overflow-x-hidden'>
        {children}
      </div>
    </div>
  )
}

export default AppShell