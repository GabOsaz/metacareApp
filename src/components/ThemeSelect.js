import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import DarkModeSvg from '../svgs/DarkModeSvg'
import LightModeSvg from '../svgs/LightModeSvg'
// import { useApplyThemePreference, useTheme } from '../utiilities/themes'
import Switch from './common/switch'

const ThemeSelect = () => {
    const themeContext = useContext(ThemeContext);

    return (
      <div className='mt-24'>
        <div className='font-normal text-xs'> Toggle theme </div>
        <div className='mt-4 flex items-center space-x-4'>
          <span onClick={() => themeContext.setTheme('light')} className='cursor-pointer'>
            <LightModeSvg />
          </span>
          <span className='cursor-pointer'>
            <Switch
              darkmode 
              theme = {themeContext.theme}
              setTheme={themeContext.setTheme}
            />
          </span>
          <span onClick={() => themeContext.setTheme('dark')} className='cursor-pointer'>
            <DarkModeSvg />
          </span>
        </div>
      </div>
    )
  }

export default ThemeSelect