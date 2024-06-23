import React from 'react'

const PrimaryHeading = ({
  children,
  reduceBelow,
  maxFontSize,
  minFontSize,
  className = '',
  center,
  right,
  ...props
}) => {
  const minText = minFontSize ? minFontSize : 32
  const maxText = maxFontSize ? maxFontSize : 64
  const reduceBefore = reduceBelow ? reduceBelow : 768
  const sizeReducer = (100 / reduceBefore) * maxText
  return (
    <h2
      {...props}
      style={{
        fontSize: `clamp(${minText}px, ${sizeReducer}vw, ${maxText}px)`,
      }}
      className={`${className} ${
        center
          ? 'mx-auto text-center'
          : right
            ? 'ml-auto mr-0 text-right'
            : 'ml-0 mr-auto text-left'
      } font-bold leading-150 text-red-500`}
    >
      {children}
    </h2>
  )
}

export default PrimaryHeading
