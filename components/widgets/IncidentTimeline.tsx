
import React from 'react';
import Card from '../ui/Card';
import { MOCK_INCIDENT } from '../../constants/mockData';

const IncidentTimeline: React.FC = () => {
  const { id, title, status, timeline } = MOCK_INCIDENT;

  return (
    <Card title={`Incident Timeline: ${id}`}>
      <div className="h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-text-primary">{title}</h4>
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${status === 'Active' ? 'bg-critical/20 text-critical' : 'bg-low/20 text-low'}`}>{status}</span>
        </div>
        <ol className="relative border-l border-border">
          {timeline.map((item, index) => (
            <li key={index} className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-2 ring-4 ring-surface"></span>
              <h5 className="flex items-center mb-1 text-sm font-semibold text-text-primary">{item.event}</h5>
              <time className="block mb-2 text-xs font-normal leading-none text-text-secondary">{new Date(item.timestamp).toLocaleString()}</time>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
};

export default IncidentTimeline;
