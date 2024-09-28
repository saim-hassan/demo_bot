import React from 'react';

interface PieChart {
  progress: number; // Value from 0 to 100 indicating progress percentage
}

const PieChart: React.FC<PieChart> = ({ progress }) => {
  const strokeWidth = 35;
  const radius = 70 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='w-[166px] h-auto max-w-full flex justify-start items-center'>
    <svg className="flex justify-center items-center w-[166px] h-auto">
      <circle
        className="stroke-current text-[#0c111d]"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={70}
        cy={70}
      />
      <circle
        className="stroke-current text-[#0F41CD] transition-all duration-500 ease-in-out"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="transparent"
        r={radius}
        cx={70}
        cy={70}
      />
    </svg>
    </div>
  );
};

export default PieChart;