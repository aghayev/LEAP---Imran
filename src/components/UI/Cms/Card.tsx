import React from "react";

type CardProps = {
  id?: string;
  className?: string;
  bgColor: string;
  d: string;
  cardLabel: string;
  cardTeaser: string;
};

export const Card: React.FC<CardProps> = ({
  id,
  className,
  bgColor,
  d,
  cardLabel,
  cardTeaser,
}) => {
  return (
    <div id={id} className={className}>
      <div className={`bg-${bgColor}-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={d}
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{cardLabel}</h3>
      <p className="text-gray-600">{cardTeaser}</p>
    </div>
  );
};

export default Card;
