
import React from 'react';
import Card from '../ui/Card';
import { MOCK_AI_ACTIONS } from '../../constants/mockData';
import { UserRole } from '../../types';
import type { AiAction } from '../../types';

interface AiAgentActionsProps {
    userRole: UserRole;
}

const statusColorMap: Record<AiAction['status'], string> = {
    'Executed': 'bg-low/20 text-low',
    'Pending Approval': 'bg-medium/20 text-medium',
    'Rejected': 'bg-critical/20 text-critical',
};

const AiAgentActions: React.FC<AiAgentActionsProps> = ({ userRole }) => {

    const showControls = userRole === UserRole.ANALYST || userRole === UserRole.MANAGER;

    return (
        <Card title={userRole === UserRole.CISO ? "AI Decision Audit Trail" : "AI Agent Actions"}>
            <div className="space-y-3 h-full overflow-y-auto pr-2">
                {MOCK_AI_ACTIONS.map(action => (
                    <div key={action.id} className="p-3 bg-background rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-sm">{action.action} <span className="text-text-secondary">by Agent</span> <span className="text-primary">{action.agent}</span></p>
                                <p className="text-xs text-text-secondary mt-1">{new Date(action.timestamp).toLocaleString()}</p>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${statusColorMap[action.status]}`}>{action.status}</span>
                        </div>
                        <p className="text-sm mt-2 text-text-secondary bg-surface p-2 rounded">{action.details}</p>
                        {showControls && action.status === 'Pending Approval' && (
                             <div className="flex space-x-2 mt-3">
                                <button className="text-xs bg-low/80 hover:bg-low text-white font-bold py-1 px-3 rounded">Approve</button>
                                <button className="text-xs bg-critical/80 hover:bg-critical text-white font-bold py-1 px-3 rounded">Reject</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AiAgentActions;
