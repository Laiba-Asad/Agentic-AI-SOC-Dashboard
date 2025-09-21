

import React, { useState } from 'react';
import Card from '../ui/Card';
import { MOCK_ALERTS } from '../../constants/mockData';
import type { Alert } from '../../types';
import { Severity } from '../../types';
import { ICON_FILTER } from '../../constants/icons';


const severityColorMap: Record<Severity, string> = {
  [Severity.CRITICAL]: 'bg-critical/20 text-critical',
  [Severity.HIGH]: 'bg-high/20 text-high',
  [Severity.MEDIUM]: 'bg-medium/20 text-medium',
  [Severity.LOW]: 'bg-low/20 text-low',
  [Severity.INFO]: 'bg-info/20 text-info',
};

const ActiveAlertsTable: React.FC = () => {
    const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);

    return (
        // FIX: ICON_FILTER is a JSX element, not a component. It should be used as {ICON_FILTER}.
        <Card title="Active Alerts" actions={<button className="text-text-secondary hover:text-text-primary flex items-center gap-1 text-sm">{ICON_FILTER} Filter</button>}>
            <div className="overflow-x-auto h-full">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-border text-text-secondary">
                        <tr>
                            <th className="p-2">Severity</th>
                            <th className="p-2">Timestamp</th>
                            <th className="p-2">Source</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Assigned To</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map(alert => (
                            <tr key={alert.id} className="border-b border-border hover:bg-background">
                                <td className="p-2">
                                    <span className={`px-2 py-1 rounded-full font-semibold text-xs ${severityColorMap[alert.severity]}`}>
                                        {alert.severity}
                                    </span>
                                </td>
                                <td className="p-2 text-text-secondary whitespace-nowrap">{new Date(alert.timestamp).toLocaleTimeString()}</td>
                                <td className="p-2 font-mono text-xs">{alert.source}</td>
                                <td className="p-2 max-w-xs truncate">{alert.description}</td>
                                <td className="p-2">{alert.assignedTo || <span className="text-text-secondary">Unassigned</span>}</td>
                                <td className="p-2">
                                     <span className={`flex items-center gap-2 ${alert.status === 'Open' ? 'text-high' : alert.status === 'In Progress' ? 'text-medium' : 'text-low'}`}>
                                        <span className={`h-2 w-2 rounded-full ${alert.status === 'Open' ? 'bg-high' : alert.status === 'In Progress' ? 'bg-medium' : 'bg-low'}`}></span>
                                        {alert.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

export default ActiveAlertsTable;