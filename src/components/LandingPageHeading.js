import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ChevronDown from '../svgs/ChevronDown'
import DividerSvg from '../svgs/DividerSvg'
import Button from './Button'
import Input from './common/Input'

function LandingPageHeading() {
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    const SearchBar = () => (
        <div className='w-[350px] mr-6'>
            <Input
                searchIconStart
                searchIconDimensions={{w:'16', h:'16'}}
                type='text'
                ariaLabel='search graphs'
                name='searchGraphs'
                placeholder='Search'
                extraClasses='border border-[#E1E1EB] dark:border-darkmode-border-color py-[12.5px]'
            />
        </div>
    );

    const FilterOptionsBtn = () => {
        const [ isOpen, setIsOpen ] = useState(false);

        return (
        <div onClick={() => setIsOpen(!isOpen)} className='px-4 py-2.5 cursor-pointer dark:text-grey-300 text-base rounded-lg font-gelion-semibold border dark:border-darkmode-border-color border-[#E1E1EB] mr-4 flex items-center space-x-5'> 
            <span> Filter Options </span>
            <span className={`${isOpen ? 'origin-center rotate-180' : ''} transition-transform duration-200 ease-in-out`}>
                <ChevronDown color='#060213' w='10' h='10' theme={theme} />
            </span>
        </div>
    )};

    return (
        <div className='px-10 w-full'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-2xl font-gelion-semibold dark:text-darkmode-primary-color text-black'> Efficiency Analytics </div>
                <div className='flex justify-between items-center'>
                    <SearchBar />
                    <FilterOptionsBtn />
                    <div className='pb-3 mr-4'>
                        <DividerSvg h='50' theme={theme} />
                    </div>
                    <Button 
                        text='Export'
                        extraClasses='bg-primary-green dark:hover:bg-dark-bg border border-primary-green hover:bg-white hover:border-primary-green hover:text-black hover:shadow-none dark:hover:text-grey-300 dark:hover:border-darkmode-border-color text-white px-8 py-2.5 text-base rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPageHeading