
export enum UserRole {
  ANALYST = 'SOC Analyst',
  MANAGER = 'SOC Manager',
  CISO = 'CISO',
}

export enum Severity {
  CRITICAL = 'Critical',
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
  INFO = 'Informational',
}

export interface Alert {
  id: string;
  timestamp: string;
  severity: Severity;
  source: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Closed';
  assignedTo: string | null;
  aiTriaged: boolean;
}

export interface ThreatIntel {
  id: string;
  source: string;
  title: string;
  type: 'OSINT' | 'Dark Web' | 'Feed';
  timestamp: string;
}

export interface Incident {
  id: string;
  title: string;
  status: 'Active' | 'Contained' | 'Eradicated' | 'Resolved';
  timeline: {
    timestamp: string;
    event: string;
  }[];
}

export interface AiAction {
  id: string;
  timestamp: string;
  agent: string;
  action: string;
  status: 'Executed' | 'Pending Approval' | 'Rejected';
  details: string;
}

export interface ChatMessage {
    id: string;
    user: string;
    avatar: string;
    message: string;
    isAI: boolean;
    timestamp: string;
}

export interface MitreTactic {
    id: string;
    name: string;
    techniques: {
        id: string;
        name: string;
        active: boolean;
    }[];
}

export interface KpiData {
    activeAlerts: { trend: number };
    threatsBlocked: { value: string; trend: number };
    mttd: { value: string; trend: number };
    mttr: { value: string; trend: number };
    agentsActive: { value: string };
}
