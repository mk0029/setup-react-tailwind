import React from 'react'
import { Link } from 'react-router-dom'

const Cta = ({
  children,
  className = '',
  ghost,
  transparent,
  header,
  url,
  ...props
}) => {
  const buttonType = {
    ghost:
      'bg-transparent border border-solid border-transparent  hover:border-black',
    transparent:
      'border border-solid border-black hover:shadow-hover hover:text-white hover:shadow-hover-black',
    default:
      'border text-white bg-black border-solid border-transparent hover:border-black hover:shadow-hover-white hover:text-black',
  }
  return url ? (
    <Link
      to={url}
      {...props}
      className={`${className} ${
        ghost
          ? buttonType.ghost
          : transparent
            ? buttonType.transparent
            : buttonType.default
      } rounded-7 px-6 py-2 capitalize common-transition`}
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} ${
        ghost
          ? buttonType.ghost
          : transparent
            ? buttonType.transparent
            : buttonType.default
      } rounded-7 px-6 py-2 common-transition`}
    >
      {children}
    </button>
  )
}

export default Cta
