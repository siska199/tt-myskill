import React, { HTMLProps } from 'react';

interface TProps extends HTMLProps<HTMLDivElement> {
  // Add your prop types here
}

const Card: React.FC<TProps> = (props:TProps) => {
    const {children} = props
  return (
    <div className='rounded-lg shadow-card bg-wite p-base flex flex-col '>
        {children}
    </div>
  );
};


export default Card;