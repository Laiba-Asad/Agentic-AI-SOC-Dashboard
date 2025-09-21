
import React from 'react';
import Card from '../ui/Card';
import { MOCK_MITRE_TACTICS } from '../../constants/mockData';

const MitreAttackMap: React.FC = () => {
  return (
    <Card title="MITRE ATT&CK Mapping View">
      <div className="flex space-x-2 overflow-x-auto p-2 bg-background rounded-md h-full">
        {MOCK_MITRE_TACTICS.map(tactic => (
          <div key={tactic.id} className="flex-shrink-0 w-48 bg-surface rounded-lg p-3">
            <h4 className="font-bold text-sm text-primary text-center truncate">{tactic.name}</h4>
            <div className="mt-2 space-y-1">
              {tactic.techniques.map(technique => (
                <div 
                  key={technique.id} 
                  className={`text-xs p-1.5 rounded truncate ${technique.active ? 'bg-critical/50 text-text-primary font-semibold' : 'bg-background/50 text-text-secondary'}`}
                  title={technique.name}
                >
                  {technique.id}: {technique.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MitreAttackMap;
