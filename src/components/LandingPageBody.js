import React from 'react';
import CalendarSvg from '../svgs/CalendarSvg';
import DividerSvg from '../svgs/DividerSvg';
import graphData from '../utiilities/mockGraphData';
import { toTitleCase } from '../utiilities/titleCase';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

function LandingPageBody() {
    // console.log(graphData[0].data.datasets[0].data)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const InfoBox = ({ title, estimate }) => (
        <div className='px-4 py-7 flex flex-col border space-y-3 border-border-color rounded-[10px] bg-[#FAFAFA] w-[187px]'>
            <span className='text-text-color text-sm font-gelion-regular'> { toTitleCase(title) } </span>
            <span className='text-[20px] text-text-black font-gelion-semibold'> { toTitleCase(estimate) } </span>
        </div>
    );

    const GraphHeading = ({ title, estimation, data }) => (
        <div className='flex justify-between items-center px-4 pl-5'>
            <div className='flex items-center space-x-4 font-gelion-semibold text-lg'>
                <span> { title }  </span>
                <span className='flex items-center justify-center rounded bg-[#25BB871A] bg-opacity-10 px-3 py-1.5 text-xs font-semibold text-primary-green'>
                    { estimation }
                </span>
            </div>

            <div className='flex items-center'>
                <div className='flex items-center space-x-2 mr-4'> 
                    <span style={{backgroundColor: data.datasets[0].borderColor}} className={`w-2.5 h-2.5 rounded-sm`} />
                    <span className='text-sm font-medium'> High Priority </span>
                </div>
                <span className='mr-4'>
                    <DividerSvg />
                </span>
                <div className='flex items-center justify-between space-x-8 cursor-pointer rounded-lg font-semibold text-sm border border-border-color py-2 px-4'>
                    <span> This Month </span>
                    <span> <CalendarSvg /> </span>
                </div>
            </div>
        </div>
    )

  return (
    <div className='mt-8 px-10 z-10 space-y-6 pb-6'>
        {graphData?.map(eachData => {
            const { title, averagePercentageTitleEstimation, averageTitle, averageTitleEstimateMins, responseTime, data, options } = eachData
            return (
                <div className='flex rounded-[10px] border border-border-color w-full h-[314px]'>

                    <div className='flex flex-col justify-between p-6 border-r border-border-color w-4/5'>
                        <GraphHeading title={title} estimation={averagePercentageTitleEstimation} data={data} />
                        <div className='mt-[30px] h-full'>
                            <Line options={options} data={data} />
                        </div>
                    </div>

                    <div className='w-1/5 px-6 py-8 flex flex-col items-center justify-center space-y-[18px]'>
                        <InfoBox title={averageTitle} estimate={averageTitleEstimateMins} />
                        <InfoBox title='response time' estimate={responseTime} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default LandingPageBody