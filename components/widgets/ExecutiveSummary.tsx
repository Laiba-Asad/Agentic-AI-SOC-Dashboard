
import React from 'react';
import Card from '../ui/Card';

const ExecutiveSummary: React.FC = () => {
  return (
    <Card title="Executive Summary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <div className="flex flex-col items-center justify-center bg-background p-4 rounded-lg">
                <p className="text-sm text-text-secondary">Overall Risk Posture</p>
                <p className="text-4xl font-bold text-high mt-2">Elevated</p>
                <div className="w-full bg-surface rounded-full h-2.5 mt-4">
                  <div className="bg-high h-2.5 rounded-full" style={{width: '75%'}}></div>
                </div>
            </div>
             <div className="flex flex-col items-center justify-center bg-background p-4 rounded-lg">
                <p className="text-sm text-text-secondary">Compliance Status</p>
                <p className="text-4xl font-bold text-low mt-2">98.7%</p>
                <p className="text-xs text-text-secondary mt-2">PCI-DSS, SOC 2, ISO 27001</p>
            </div>
             <div className="bg-background p-4 rounded-lg">
                <p className="text-sm text-text-secondary mb-2 font-semibold">AI Insights</p>
                <ul className="text-sm space-y-2 list-disc list-inside text-text-primary">
                    <li>AI-driven automation has reduced analyst workload by <span className="text-primary font-bold">28%</span> this quarter.</li>
                    <li>Threat detection efficacy increased by <span className="text-primary font-bold">15%</span> due to new AI models.</li>
                    <li>Top identified risk: Unpatched vulnerabilities in public-facing web servers.</li>
                </ul>
            </div>
        </div>
    </Card>
  );
};

export default ExecutiveSummary;
