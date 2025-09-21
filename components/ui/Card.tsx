
import React from 'react';
import type { ReactNode } from 'react';
import { ICON_DOTS_VERTICAL } from '../../constants/icons';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', actions }) => {
  return (
    <div className={`bg-surface rounded-lg shadow-lg flex flex-col ${className}`}>
      <div className="flex justify-between items-center p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <div className="flex items-center space-x-2">
            {actions}
            <button className="text-text-secondary hover:text-text-primary">
                {ICON_DOTS_VERTICAL}
            </button>
        </div>
      </div>
      <div className="p-4 flex-grow h-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
