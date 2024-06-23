import React from 'react'

const Paragraph = ({
  children,
  reduceBelow,
  maxFontSize,
  minFontSize,
  className = '',
  center,
  right,
  ...props
}) => {
  const minText = minFontSize ? minFontSize : 14
  const maxText = maxFontSize ? maxFontSize : 18
  const reduceBefore = reduceBelow ? reduceBelow : 768
  const sizeReducer = (100 / reduceBefore) * maxText
  return (
    <p
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
      } font-normal leading-140 text-green-500`}
    >
      {children}
    </p>
  )
}

export default Paragraph
