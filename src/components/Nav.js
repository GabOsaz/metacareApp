import React, { useState } from 'react'
import BellSvg from '../svgs/BellSvg'
import ChevronDown from '../svgs/ChevronDown'
import DividerSvg from '../svgs/DividerSvg'
import Input from './common/Input'
import { motion } from 'framer-motion'

function Nav() {
    const [ alertCount ] = useState(3);
    const [ activeNav, setActiveNav ] = useState('0');

    const navItems = ['Efficiency', 'Volume', 'Customer Satisfaction', 'Backlog'];

    return (
    <div className='h-[135px] w-[83vw] fixed top-0 left-[16.5%] z-10 bg-white'>
        <div className='h-[83px] w-full border-b border-border-color px-10 flex items-center justify-between'>
            <div className='w-[441px]'>
                <Input 
                    type='text'
                    ariaLabel='search app'
                    name='appSearch'
                    placeholder='Ask us any question'
                    searchIconEnd
                />
            </div>
            <div className='border border-border-color rounded-lg px-5 py-3 flex items-center'>
                <span className='mr-1.5'> <BellSvg /> </span>
                <span className='w-4 h-4 text-white bg-primary-red rounded text-xs flex items-center justify-center mr-6'>
                    { alertCount }
                </span>
                <span className='mr-6'> <DividerSvg /> </span>
                <span className='w-8 h-8 rounded-[100%] border border-primary-color mr-3' />
                <span> <ChevronDown /> </span>
            </div>
        </div>
        <nav className='border-b border-border-color text-text-color px-10 text-base bg-white'>
            <ul className='flex items-center w-full space-x-10'>
                {navItems.map((item, index) => (
                    <motion.li
                        onClick={() => setActiveNav(index.toString())}
                        key={index} 
                        className={`${index.toString() === activeNav && ' text-black font-bold'} transition-colors duration-150 ease-in-out relative py-5 cursor-pointer`}
                    >
                        {item}
                        {index.toString() === activeNav && 
                            <motion.div layoutId="underline" className='h-0.5 bg-primary-color absolute bottom-0 left-0 right-0' />
                        }
                    </motion.li>
                ))}
            </ul>
        </nav>
    </div>
    )
}

export default Nav