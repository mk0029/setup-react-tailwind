import React from 'react'

const Icons = ({ icon, className = '', ...props }) => {
  const iconsList = {
    'chevron-double-up': (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        className={`${className}`}
        stroke="currentColor"
      >
        <path
          className="stroke-white common-transition group-hover:stroke-black"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          className="stroke-white common-transition group-hover:stroke-black"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    ),
  }
  return icon && iconsList[icon]
}

export default Icons
