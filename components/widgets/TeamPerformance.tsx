
import React from 'react';
import Card from '../ui/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'S. Smith', alerts: 45, color: '#00aaff' },
  { name: 'D. Jones', alerts: 38, color: '#3b82f6' },
  { name: 'M. Lee', alerts: 32, color: '#22c55e' },
  { name: 'K. Chen', alerts: 25, color: '#eab308' },
  { name: 'AI Agent', alerts: 150, color: '#a0a0a0' },
];

const TeamPerformance: React.FC = () => {
  return (
    <Card title="Team Performance & Workload">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="md:col-span-2">
            <h4 className="text-text-secondary text-sm font-semibold mb-2">Alerts Closed (Last 24h)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
                <XAxis type="number" stroke="#a0a0a0" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="#a0a0a0" fontSize={12} width={80} tick={{ fill: '#a0a0a0' }} />
                <Tooltip 
                  cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                  contentStyle={{ 
                      backgroundColor: '#2c2c2c', 
                      border: '1px solid #404040',
                      borderRadius: '0.5rem'
                  }} 
                  labelStyle={{ color: '#e0e0e0' }}
                />
                <Bar dataKey="alerts" barSize={15}>
                   {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>
        <div className="bg-background p-4 rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="text-text-secondary text-sm font-semibold mb-3">Key Stats</h4>
              <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>Escalation Rate:</span> <span className="font-bold text-high">12%</span></div>
                  <div className="flex justify-between"><span>Avg. Triage Time:</span> <span className="font-bold">8m 12s</span></div>
                  <div className="flex justify-between"><span>SLA Compliance:</span> <span className="font-bold text-low">99.2%</span></div>
              </div>
            </div>
             <button className="text-sm w-full bg-primary/80 hover:bg-primary text-white font-bold py-2 px-4 rounded mt-4">
                View Full Report
            </button>
        </div>
      </div>
    </Card>
  );
};

export default TeamPerformance;
