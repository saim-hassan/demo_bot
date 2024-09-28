import Button from '@/components/common/navbar/Button';
import React from 'react';

interface TimebuttonProps {
  label: string;
  onClick: () => void;
}

const Timebutton: React.FC<TimebuttonProps> = ({ onClick, label }) => {
  const handleClick = () => {
    onClick(); // Call the onClick function passed from the parent component
  };

  return (
    <div className='w-full flex justify-center items-center border-2 border-[#333741] bg-[#0C111D]'>
      <Button
        text={label}
        className='text-[#CECFD2] text-[10px] font-medium py-[10px] px-3 hover:bg-[#161B26]'
        onClick={handleClick} // Call handleClick function on button click
      />
    </div>
  );
};

export default Timebutton;