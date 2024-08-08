// Button.jsx
import React from 'react';

const Button = ({
  label,
  iconURL,
  backgroundColor = 'bg-black',
  borderColor = '',
  textColor = 'text-[#FFFFFF]',
  fullWidth = false,
  roundness = 'rounded-full',
  className = '',
  onClick,
}) => {
  const classes = `
    flex justify-center items-center gap-2 px-7 py-4 border leading-none
    ${backgroundColor}
    ${borderColor}
    ${textColor}
    ${roundness}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  return (
    <button onClick={onClick} className={classes}>
      {label}
      {iconURL && (
        <img 
          src={iconURL}  
          alt="icon" 
          className="text-white"
        />
      )}
    </button>
  );
};

export default Button;
