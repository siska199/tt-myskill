import React, { HTMLProps } from 'react';

interface TProps extends HTMLProps<HTMLDivElement> {
  // Add your prop types here
}

const Card: React.FC<TProps> = (props:TProps) => {
    const {children} = props
  return (
    <div className='rounded-lg shadow-card bg-white p-base flex flex-col space-y-md '>
        {children}
    </div>
  );
};



export default Card;