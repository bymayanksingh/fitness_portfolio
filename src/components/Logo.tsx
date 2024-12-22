import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main Circle */}
      <circle
        cx="16"
        cy="16"
        r="15"
        className="stroke-primary-light dark:stroke-primary-dark"
        strokeWidth="2"
      />
      
      {/* Dumbbell Design */}
      <g className="fill-primary-light dark:fill-primary-dark">
        {/* Left Weight */}
        <rect x="6" y="14" width="4" height="4" rx="1" />
        <rect x="7" y="12" width="2" height="8" rx="0.5" />
        
        {/* Bar */}
        <rect x="10" y="15" width="12" height="2" rx="0.5" />
        
        {/* Right Weight */}
        <rect x="22" y="14" width="4" height="4" rx="1" />
        <rect x="23" y="12" width="2" height="8" rx="0.5" />
      </g>
    </svg>
  );
}
