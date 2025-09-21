
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { MOCK_TREND_DATA } from '../../constants/mockData';
import { Severity } from '../../types';

const ThreatTrendsChart: React.FC = () => {
  const severityColors: Record<Severity, string> = {
    [Severity.CRITICAL]: '#ef4444',
    [Severity.HIGH]: '#f97316',
    [Severity.MEDIUM]: '#eab308',
    [Severity.LOW]: '#22c55e',
    [Severity.INFO]: '#3b82f6',
  };

  return (
    <Card title="Threat Trends (Last 7 Days)">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={MOCK_TREND_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
          <XAxis dataKey="name" stroke="#a0a0a0" fontSize={12} />
          <YAxis stroke="#a0a0a0" fontSize={12} />
          <Tooltip 
            contentStyle={{ 
                backgroundColor: '#2c2c2c', 
                border: '1px solid #404040',
                borderRadius: '0.5rem'
            }} 
            labelStyle={{ color: '#e0e0e0' }}
          />
          <Legend wrapperStyle={{fontSize: "12px"}}/>
          <Line type="monotone" dataKey="Critical" stroke={severityColors.Critical} strokeWidth={2} />
          <Line type="monotone" dataKey="High" stroke={severityColors.High} strokeWidth={2} />
          <Line type="monotone" dataKey="Medium" stroke={severityColors.Medium} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ThreatTrendsChart;
