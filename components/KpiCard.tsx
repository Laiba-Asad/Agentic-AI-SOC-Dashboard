
import React from 'react';
import type { ReactNode } from 'react';
import { ICON_TRENDING_UP, ICON_TRENDING_DOWN } from '../constants/icons';

interface KpiCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: number;
  trendDirection?: 'up' | 'down'; // 'up' means positive trend, 'down' means positive trend is downwards
  timeframe?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, trend, trendDirection = 'up', timeframe }) => {
    
  const isPositive = trend !== undefined && (trendDirection === 'up' ? trend > 0 : trend < 0);
  const isNegative = trend !== undefined && (trendDirection === 'up' ? trend < 0 : trend > 0);
  
  const trendColor = isPositive ? 'text-low' : isNegative ? 'text-critical' : 'text-text-secondary';
  
  return (
    <div className="bg-surface p-4 rounded-lg shadow-lg flex items-start justify-between">
      <div>
        <p className="text-sm text-text-secondary font-medium">{title}</p>
        <p className="text-2xl font-bold text-text-primary mt-1">{value}</p>
        {trend !== undefined && (
          <div className="flex items-center text-xs mt-2">
            <span className={trendColor} >
                {isPositive || isNegative ? (
                    <span className="flex items-center">
                        {isPositive ? ICON_TRENDING_UP : ICON_TRENDING_DOWN}
                        <span className="ml-1">{Math.abs(trend)}%</span>
                    </span>
                ) : (
                    <span>No Change</span>
                )}
            </span>
             {timeframe && <span className="text-text-secondary ml-1">vs last {timeframe}</span>}
          </div>
        )}
      </div>
      <div className="bg-background p-3 rounded-full">
        {icon}
      </div>
    </div>
  );
};

export default KpiCard;
