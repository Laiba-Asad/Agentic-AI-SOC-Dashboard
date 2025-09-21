
import React from 'react';
import Card from '../ui/Card';
import { MOCK_THREAT_INTEL } from '../../constants/mockData';

const ThreatIntelFeed: React.FC = () => {
  const getSourceColor = (type: 'OSINT' | 'Dark Web' | 'Feed') => {
    switch (type) {
      case 'Dark Web': return 'border-critical text-critical';
      case 'OSINT': return 'border-info text-info';
      case 'Feed':
      default: return 'border-secondary text-secondary';
    }
  };

  return (
    <Card title="Threat Intelligence Feed">
      <div className="space-y-4 h-full overflow-y-auto pr-2">
        {MOCK_THREAT_INTEL.map(intel => (
          <div key={intel.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0 pt-1">
              <span className="block h-2.5 w-2.5 bg-primary rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-semibold border rounded-full px-2 py-0.5 ${getSourceColor(intel.type)}`}>
                  {intel.type}
                </span>
                <span className="text-xs text-text-secondary">{intel.source}</span>
              </div>
              <p className="text-sm text-text-primary mt-1">{intel.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ThreatIntelFeed;
