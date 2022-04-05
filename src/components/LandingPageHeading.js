import React from 'react'
import ChevronDown from '../svgs/ChevronDown'
import DividerSvg from '../svgs/DividerSvg'
import Button from './Button'
import Input from './common/Input'

function LandingPageHeading() {

    const SearchBar = () => (
        <div className='w-[350px] mr-6'>
            <Input
                searchIconStart
                searchIconDimensions={{w:'16', h:'16'}}
                type='text'
                ariaLabel='search graphs'
                name='searchGraphs'
                placeholder='Search'
                extraClasses='border border-[#E1E1EB] py-[12.5px]'
            />
        </div>
    );

    const FilterOptionsBtn = () => (
        <div className='px-4 py-2.5 cursor-pointer text-base rounded-lg font-gelion-semibold border border-[#E1E1EB] mr-4 flex items-center space-x-5'> 
            <span> Filter Options </span>
            <span>
                <ChevronDown color='#060213' w='10' h='10' />
            </span>
        </div>
    );

    return (
        <div className='px-10 w-full'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-2xl font-gelion-semibold text-black'> Efficiency Analytics </div>
                <div className='flex justify-between items-center'>
                    <SearchBar />
                    <FilterOptionsBtn />
                    <div className='pb-3 mr-4'>
                        <DividerSvg h='50' />
                    </div>
                    <Button 
                        text='Export'
                        extraClasses='bg-primary-green text-white px-8 py-2.5 text-base rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPageHeading