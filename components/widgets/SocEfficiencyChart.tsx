
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { MOCK_EFFICIENCY_DATA } from '../../constants/mockData';

const SocEfficiencyChart: React.FC = () => {
  return (
    <Card title="SOC Efficiency Metrics">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={MOCK_EFFICIENCY_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#404040" horizontal={false} />
          <XAxis type="number" stroke="#a0a0a0" fontSize={12} />
          <YAxis type="category" dataKey="name" stroke="#a0a0a0" fontSize={12} width={150} tick={{ fill: '#a0a0a0' }} />
          <Tooltip 
            cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
            contentStyle={{ 
                backgroundColor: '#2c2c2c', 
                border: '1px solid #404040',
                borderRadius: '0.5rem'
            }} 
            labelStyle={{ color: '#e0e0e0' }}
          />
          <Bar dataKey="value" name="Count" barSize={20} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SocEfficiencyChart;
