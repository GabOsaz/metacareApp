import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'

function AppShell({ children }) {
  const bodyAnime = {
    hidden: { 
      opacity: 0,
      y: '-100px'
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }    
    }
  }

  const parentAnime = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      transition: { delay: 0.2 }
    },
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={parentAnime}
      className='w-full dark:bg-dark-bg'
    >

      <Nav />

      <Sidebar />

      {/* Body */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={bodyAnime}
        className='absolute left-[16.5vw] pt-[11%] dark:bg-dark-bg w-[83vw] overflow-x-hidden'
      >
        {children}
      </motion.div>

    </motion.div>
  )
}

export default AppShell