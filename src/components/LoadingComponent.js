import React from 'react'
import DividerSvg from '../svgs/DividerSvg'

function LoadingComponent() {
    
    const GraphHeading = () => (
        <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <span className='bg-gray-200 w-44 h-6' />
                <span className='flex items-center justify-center rounded bg-gray-200 w-12 h-8 px-3 py-1.5' />
            </div>

            <div className='flex items-center'>
                <div className='flex items-center space-x-2 mr-4'> 
                    <span className={`w-3 h-3 rounded-sm bg-gray-200`} />
                    <span className='text-sm font-medium dark:text-grey-300'> High Priority </span>
                </div>
                <span className='mr-4'>
                    <DividerSvg />
                </span>
                <div className='flex items-center justify-between space-x-8 w-32 h-8 bg-gray-200 cursor-pointer rounded-lg font-semibold text-sm border border-border-color dark:border-darkmode-border-color py-2 px-4' />            </div>
        </div>
    );

    const InfoBox = () => (
        <div className='px-4 py-7 flex flex-col border space-y-3 border-border-color dark:border-darkmode-border-color rounded-[10px] dark:bg-darkmode-light-bg bg-gray-200 w-[187px] h-[116px]' />
    );
    
    return (
        <div className='flex rounded-[10px] animate-pulse mt-8 mx-auto z-10 space-y-6 mb-6 border border-border-color dark:border-darkmode-border-color w-[94%] h-[314px]'>

            <div className='flex flex-col justify-between p-6  border-r dark:border-darkmode-border-color border-border-color w-4/5'>
                <GraphHeading />
                <div className='mt-[30px] h-full bg-gray-200' />
            </div>

            <div className='w-1/5 px-6 py-8 flex flex-col items-center justify-center space-y-[18px]'>
                <InfoBox />
                <InfoBox />
            </div>
        </div>
    )
}

export default LoadingComponent