import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Button = ({ type, text, loading, extraClasses }) => (
  <button
    type={type}
    className={`group relative flex justify-center py-3 px-4 text-sm font-medium rounded-md text-text-black focus:outline-none transition duration-100 ease-in-out shadow-lg ${extraClasses}`}
  >
    {/* {loading ? (
      <span className="flex items-center">
        <FontAwesomeIcon icon={faCircleNotch} spin />
        <span className="ml-2">Loading...</span>
      </span>
    ) : (
      <span>{text}</span>
    )} */}
    <span>{text}</span>
  </button>
);

export default Button;
