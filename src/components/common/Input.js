import React from 'react';
import SearchIcon from '../../svgs/SearchIcon';

const Input = ({ ariaLabel, name, type, placeholder, extraClasses, searchIconDimensions, searchIconStart, searchIconEnd, field }) => (
  // <div className='flex items-center w-full space-x-6'>
  <div className='relative block w-full'>
    { searchIconStart &&
      // <span className=''>
      <span className='absolute left-4 top-[33%]'>
        <SearchIcon w={searchIconDimensions.w} h={searchIconDimensions.h} />
      </span>
    }
    <input
      {...field}
      aria-label={ariaLabel}
      name={name}
      type={type}
      className={`appearance-none w-full ${searchIconStart ? 'pl-12 pr-3' : 'px-3'} ${extraClasses} dark:bg-darkmode-light-bg dark:placeholder:text-grey-300 dark:text-grey-300 py-4 placeholder-text-mute placeholder:text-base text-gray-900 rounded-lg bg-input-bg transition-colors duration-200 ease-in-out focus:outline-none focus:shadow-outline-blue dark:focus:border-darkmode-primary-color focus:border-primary-color focus:z-10 sm:text-sm sm:leading-5`}
      placeholder={placeholder}
    />
    { searchIconEnd &&
      // <span className='justify-end'>
      <span className='absolute right-4 top-4'>
        <SearchIcon />
      </span>
    }
  </div>
);

export default Input;
